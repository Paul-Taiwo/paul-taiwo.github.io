// var cc = +(localStorage.previousBGColor || -1) + 1
// cc = cc >= colors.length ? 0 : cc;
// body.style.backgroundColor = colors[cc];
// localStorage.previousBGColor = cc;

let doc = document.documentElement,
    body = document.querySelector('body'),
    docBgColor,
    colors = ['#6a1b9a', '#512da8', '#1565c0', '#ad1457', '#2e7d32'];

docBgColor = doc.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
if (docBgColor == '#6a1b9a') {
  body.style.backgroundColor = '#804ca0';
} else if (docBgColor == '#512da8') {
  body.style.backgroundColor = '#5c6bc0';
} else if (docBgColor == '#1565c0') {
  body.style.backgroundColor = '#2085d6';
} else if (docBgColor == '#ad1457') {
  body.style.backgroundColor = '#dc2b78';
} else if (docBgColor == '#2e7d32') {
  body.style.backgroundColor = '#3da943';
}