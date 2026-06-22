const fs = require('fs');
const path = require('path');

const root = process.cwd();
const out = path.join(root, 'dist');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const items = [
  'index.html',
  'about.html',
  'markets.html',
  'contact.html',
  'styles.css',
  'script.js',
  'assets'
];

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copy(path.join(src, child), path.join(dest, child));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

for (const item of items) {
  const src = path.join(root, item);
  if (fs.existsSync(src)) {
    copy(src, path.join(out, item));
  } else {
    console.warn(`Missing: ${item}`);
  }
}

console.log('Static site copied to dist/');
