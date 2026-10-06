---
title: "開発日記 2025-08-12"
date: 2025-08-12T15:41:54
description: "gamescom（追記あり）"
---

こんにちは。天然温泉(kyp)です。これは開発日記です。

#### gamescom（予定）

8月20日〜24日に、ドイツのケルンでgamescomが開催されます。（旧）E3・TGSと並んで世界三大ゲームショウの1つと言われているイベントです。

初の海外イベントとして、SAFE HAVN STUDIOのメンバーは来週からドイツに向かいます。そして、「SAEKO: Giantess Dating Sim」も、[ジャパンパビリオン](https://www.vipo.or.jp/news/46620/)の一員として展示されるはずです。......はず？

<figure>
    <blockquote class="twitter-tweet" data-media-max-width="560">
      <p lang="en" dir="ltr">
        We (the game and the devs) are going to take part in
        <a href="https://twitter.com/gamescom?ref_src=twsrc%5Etfw">@gamescom</a>
        this year! It's first oversea event for us and we're
        more than excited.<br>Can't wait to trinken viel Kölsch 🍻
        <a href="https://t.co/LCf2mLUdwc">pic.twitter.com/LCf2mLUdwc</a>
      </p>
      — SAEKO: Giantess Dating Sim | OUT NOW (@saekogame)
      <a href="https://twitter.com/saekogame/status/1935594237300773263?ref_src=twsrc%5Etfw">June 19, 2025</a>
    </blockquote>
    <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <figcaption>これになれる...はず</figcaption>
  </figure>

gamescomに向けて、数週間前からノベルティやちょっとしたイベントの準備などを進めていて、本来はこの記事でその告知をしようと思っていました。ただ、自分たちにはコントロールできない出来事が起きていて、会場でのゲーム展示ができない可能性が1%くらい出ています。

もちろん、残りの99%を引き、何事もなく展示できることを強く信じていますが、テンション的にはっきり宣伝するのが少し難しい状況です。事態が解決したら、[Twitter](https://twitter.com/saekogame)や[Discord](https://discord.com/invite/3U7H7CjgxP)などで告知をしようと思いますので、特にgamescomにお越しになる予定がある方は定期的にチェックしていただければと思います。

<div class="notice">
    <h4>追記</h4>
    この記事を書いた翌日に連絡があり、<b>gamescomへのSAEKOの出展が無事確定しました</b>。詳しい情報は今後追ってお伝えします。ケルンで皆さんとお会いできるのが楽しみです！
  </div>

#### 進捗とか

事務的な作業がたくさんあったり、外に出るたびに体力の99%を奪い取られたりして、この2週間はなかなかゲーム制作の時間が取れませんでした。それでも、前回の開発日記で触れた「SAEKOの移植作業」「新しいゲームの制作」について、どちらもゆっくりではありますが着実に進んでいると思います。

複数のプロジェクトを同時並行で進めるというのが初めてなので、10分ごとに開くプロジェクトを変えたり、最初はなかなか集中に苦しんでいました。ただ、「平日はSAEKO」「土日は新プロジェクト」みたいな形で、自分の中でルールを決めたら、だいぶ思考がスッキリした気がします。新しいプロジェクトのほうがコードが綺麗で楽しいので、土日が楽しみという感覚を久々に取り戻しました。まあ、結局、やっていることは家に引きこもってキーボードを打ってるだけなんだけど......。

あと、S....chへの移植について。ゲーム専用機への移植ということで、環境構築やN......o特有のライブラリの理解などで最初は苦しんでいたのですが、Ebitengine作者の[星一](https://x.com/hajimehoshi)さんの助けもあり、だいぶ順調に進み始めています。

テキストやアニメーションの描画、効果音や音楽の再生など、ゲームプレイの基本的な部分については、PC版から特に何の調整もせずに動いたのでびっくりしました。ファイルのロード／セーブや、コントローラー用のUIなど、細かい部分ではまだ実装が必要ですが、想定よりはだいぶスムーズです。

移植があっさり終わったら、余った時間で追加コンテンツの実装とかを行いたいな〜と思っていますが、はたして本当に実現するのか、それともフラグとなってしまうのか......？

#### おわり

今回の日記は薄めです。SAEKOも新プロジェクトも準備中なので、しばらくはそんな感じになりそう。

SAEKOを作り終わってから、社会的なタスクが増えて、その中にはも〜〜〜〜〜全然エモくないものもあります。めっちゃ疲れる。一方で、コードの適切なアーキテクチャを考えたり、次回作のテキストを書いたりするのはやっぱり楽しくて、今後も社会的な決まりや名誉とはできるだけ無縁な場所で、できるだけ素朴な形でゲームを作りたいと思っています。

  

...まあ、もちろん、それはそれとしてお金は欲しいし、ドイツにも行きたいけどね！！！ブースで気持ちよくビールを飲みながら接客したい！！！

いろいろ不安はあるけど、ひとまずはドイツに行けると信じて準備を進めます。ダメだったら日本でストゼロとか飲みます。

<div class="notice notice-fake">
    <h4>追記</h4>
    <div class="notice-fake-bottom">
      この記事を書いた翌日に連絡があり、<b>gamescomへのSAEKOの出展が無事確定しまし</b>
    </div>
  </div>

おわり！
