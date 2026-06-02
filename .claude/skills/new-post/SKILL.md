---
name: new-post
description: 開発日記の新規記事を公開する。blog/<日付>/index.md の本文(文言は変えない)を既存記事と同じHTMLテンプレートに整形し、リンク画像とスクリーンショットをwebp化して配置、ルート index.html の一覧と feed.atom にも登録する。「新しい記事を作って」「個別ページを作って」「ブログを公開」などの依頼で使う。
---

# 開発日記の新規記事を公開する

SAFE HAVN STUDIO のブログ(開発日記)の新しい記事を、既存記事と同じ形で公開するための手順。

## 前提・入力

- 記事の本文は `blog/<YYYY-MM-DD>/index.md` に Markdown で置かれている。
- **本文の文言は絶対に変えない。** 見出し・段落・リンク・記号・誤字に見えるものも含めてそのまま使う。
- 公開後の各記事ディレクトリは `index.html` + webp 画像のみで構成される(他記事に合わせる)。

対象の日付/mdが不明なら、まず `blog/` で最新の `index.md` を探すか、ユーザーに確認する。

## 手順

### 1. 本文とテンプレートを読む

1. 対象の `blog/<日付>/index.md` を Read する。空なら保存されているか確認する。
2. テンプレートとして直近の記事の `index.html` を読む(例: `ls -dt blog/*/ | head` で最新を特定)。HTML構造・ヘッダ(meta/og/twitter)・header/footer をそのまま流用する。

### 2. 画像を集めて webp 化する

すべての画像は対象記事ディレクトリ内に置き、`./name.webp` で参照する。変換は `cwebp -q 85 入力 -o 出力.webp`(`cwebp` は /opt/homebrew/bin にある)。元ファイル(png等)は変換後に削除する。

- **md内のリンク画像** `![alt](URL)`:
  - `curl -sL -o tmp.png "URL"` でDL → `file` で形式確認 → webp化 → 元削除。
  - わかりやすいファイル名を付ける(例: `bitsummit_goods.webp`)。`alt` は md の alt をそのまま使う。
- **テキストだけのスクリーンショット行**(例: `スクリーンショット 2026-06-02 17.20.00`):
  - これはリンクではないが画像を貼る意図の箇所。`~/Desktop/<その文字列>.png` を探す。
  - 見つかれば webp 化してその位置に `<figure>` として埋め込む(figcaptionは付けない)。`alt` には元のテキストを入れる。
  - 見つからない/判断に迷う場合はユーザーに「画像を渡す/テキストのまま/その行は削除」を確認する。

### 3. index.html を生成する

テンプレートに沿って `blog/<日付>/index.html` を作る。

- `<title>` / `og:title` / `twitter:title` は `開発日記 <日付>`(タイトル形式は md の h1 に合わせる)。
- `og:description` は `不定期更新`(他記事の慣例。内容に応じて変えてよいか迷えば確認)。
- `og:image` / `twitter:image` は**最初の画像**の絶対URL `https://safehavn.dev/blog/<日付>/<first>.webp`。
- 見出しの `id` はテンプレと同様に付ける(`-`、`bitsummit-` など。重複見出しは `--1` のように連番)。
- 本文リンクは md の `[text](url)` を `<a href>` に変換。文言は変えない。
- **三点リーダの正規化**: 本文中の `…`(U+2026)は半角ピリオド3つ `...` に置換する。これは唯一許可された文言の変更で、他の文字・記号・誤字は一切いじらない。`…` が2連(`……`)なら `......` のように、出てきた `…` の数だけ `...` に展開する。

### 4. 一覧とフィードに登録する

- ルート `index.html` の `<ul id="articles">` の**先頭**に追加:
  ```html
  <li>
    <a href="./blog/<日付>/">開発日記 <日付></a>
  </li>
  ```
- `feed.atom` の最初の `<entry>` の**前**に新エントリを追加し、feed 直下の `<updated>` も新記事の日時に更新:
  ```xml
  <entry>
    <title>開発日記 <日付> -- SAFE HAVN STUDIO</title>
    <link rel="alternate" href="https://safehavn.dev/blog/<日付>/" />
    <id>tag:safehavn.dev,2023:entry://<日付></id>
    <updated><日付>T<時刻></updated>
    <summary>不定期更新</summary>
  </entry>
  ```

### 5. 後片付け

- 公開できたら `blog/<日付>/index.md` を削除する(他記事ディレクトリは html のみのため)。削除前に一声かけるか、ユーザー指示があれば従う。
- 最終構成が `index.html` + webp 群のみになっていることを確認する。

## チェックリスト

- [ ] 本文の文言を一切変えていない(`…`→`...` の正規化を除く)
- [ ] 本文中の `…` をすべて `...` に置換した
- [ ] 画像はすべて webp、参照は `./name.webp`、元ファイルは削除済み
- [ ] og/twitter image が最初の画像を指している
- [ ] ルート index.html の一覧に追加
- [ ] feed.atom にエントリ追加 + feed の `<updated>` 更新
- [ ] index.md を削除
