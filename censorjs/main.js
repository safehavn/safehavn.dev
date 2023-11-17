import * as fs from 'fs';
import * as jsdom from 'jsdom';

const { JSDOM } = jsdom;

// todo: dynamic
const filepath = './blog/2023-11-14/index.html';
const str = fs.readFileSync(`../original/${filepath}`, 'utf8');

const dom = new JSDOM(str, 'text/html');

// censor everything in <em> tag
Array.from(dom.window.document.getElementsByTagName('em')).forEach((em) => {
    em.innerHTML = '█'.repeat(em.innerHTML.length);
});

// console.log(dom.window.document.documentElement.outerHTML);

fs.writeFileSync(`../censored/${filepath}`, dom.window.document.documentElement.outerHTML, 'utf8');
