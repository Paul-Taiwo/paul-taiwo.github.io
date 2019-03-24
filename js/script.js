let doc = document.documentElement,
  body = document.querySelector('body'),
  colors = ['#6a1b9a', '#512da8', '#1565c0', '#ad1457', '#2e7d32'];
// var cc = +(localStorage.previousBGColor || -1) + 1
// cc = cc >= colors.length ? 0 : cc;
// body.style.backgroundColor = colors[cc];
// localStorage.previousBGColor = cc;
doc.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]