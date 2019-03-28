// var cc = +(localStorage.previousBGColor || -1) + 1
// cc = cc >= colors.length ? 0 : cc;
// body.style.backgroundColor = colors[cc];
// localStorage.previousBGColor = cc;

let doc = document.documentElement,
    body = document.querySelector('body'),
    colors = ['#6a1b9a', '#512da8', '#1565c0', '#ad1457', '#2e7d32'],
    docBgColor;

docBgColor = doc.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

switch (true) {
  case docBgColor == '#6a1b9a':
    body.style.backgroundColor = '#804ca0';
    break;
  case docBgColor == '#512da8':
    body.style.backgroundColor = '#5c6bc0';
    break;
  case docBgColor == '#1565c0':
    body.style.backgroundColor = '#2085d6';
    break;
  case docBgColor == '#ad1457':
    body.style.backgroundColor = '#dc2b78';
    break;
  case docBgColor == '#2e7d32':
    body.style.backgroundColor = '#3da943';
    break;
  default:
    break;
}

document.querySelector('#mobile-btn')
  .addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#link-contain')
      .classList.add('mobile-active');
  });

document.querySelector('.close-btn')
  .addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#link-contain')
      .classList.remove('mobile-active');
  });
