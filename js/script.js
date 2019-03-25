let doc = document.documentElement,
  body = document.querySelector('body'),
  colors = ['#6a1b9a', '#512da8', '#1565c0', '#ad1457', '#2e7d32'];
// var cc = +(localStorage.previousBGColor || -1) + 1
// cc = cc >= colors.length ? 0 : cc;
// body.style.backgroundColor = colors[cc];
// localStorage.previousBGColor = cc;
doc.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
if (doc.style.backgroundColor == 'rgb(106, 27, 154)') {
  body.style.backgroundColor = '#804ca0';
} else if (doc.style.backgroundColor == 'rgb(81, 45, 168)') {
  body.style.backgroundColor = '#5c6bc0';
} else if (doc.style.backgroundColor == 'rgb(21, 101, 192)') {
  body.style.backgroundColor = '#2085d6';
} else if (doc.style.backgroundColor == 'rgb(173, 20, 87)') {
  body.style.backgroundColor = '#dc2b78';
} else if (doc.style.backgroundColor == 'rgb(46, 125, 50)') {
  body.style.backgroundColor = '#3da943';
}