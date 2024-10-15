'use strict'

const content    = document.querySelector('#content');
const chTotal    = document.querySelector('.characters__total--counter');
const chRemaning = document.querySelector('.characters__remaining--counter');

let total = content.value.length;
let remaning = 50 - total;

content.addEventListener('keydown', (e) => {
    
    
    if (content.value.length >= 50 && e.key != 'Delete' && e.key != 'Backspace') {
        e.preventDefault();
    }
});

content.addEventListener('input', (e) => {
    chTotal.textContent    = content.value.length;
    chRemaning.textContent = remaning;
});