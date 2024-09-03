
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const black = document.querySelector('.black');
const del = document.querySelector('.del');
const body = document.querySelector('body');
const red2 = document.querySelector('.red2');
const yellow2 = document.querySelector('.yellow2');
const blue2 = document.querySelector('.blue2');
const black2 = document.querySelector('.black2');
const del2 = document.querySelector('.del2');
const box = document.querySelector('.box');


red.addEventListener('click', () => {
    body.style.background = 'red'
})
yellow.addEventListener('click', () => {
    body.style.background = 'yellow'
})
blue.addEventListener('click', () => {
    body.style.background = 'blue'
})
black.addEventListener('click', () => {
    body.style.background = 'black'
})
del.addEventListener('click', () => {
    body.style.background = 'none'
})


const boxes = document.querySelectorAll('.box');

red2.addEventListener('click', () => {
    boxes.forEach(box => box.style.background = 'red');
});
yellow2.addEventListener('click', () => {
    boxes.forEach(box => box.style.background = 'yellow');
});
blue2.addEventListener('click', () => {
    boxes.forEach(box => box.style.background = 'blue');
});
black2.addEventListener('click', () => {
    boxes.forEach(box => box.style.background = 'black');
});
del2.addEventListener('click', () => {
    boxes.forEach(box => box.style.background = 'none');
});
