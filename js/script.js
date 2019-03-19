let body = document.querySelector('body');
let colors = ['#ffeb3b', '#6a1b9a', '#3949ab']
// var cc = +(localStorage.previousBGColor || -1) + 1
// cc = cc >= colors.length ? 0 : cc;
// body.style.backgroundColor = colors[cc];
// localStorage.previousBGColor = cc;
body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)]