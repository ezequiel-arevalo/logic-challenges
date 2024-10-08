'use strict'

/*
    Definimos las cosas que vamos a utilizar del DOM
*/

let contador     = 0;
let number       = document.querySelector('#number');
let buttonRestar = document.querySelector('.button__restar');
let buttonReset  = document.querySelector('.button__reset');
let buttonSumar  = document.querySelector('.button__sumar');

number.textContent = 0;
buttonRestar.addEventListener('click', (e) => {
    // console.info('Restar');
    // console.log(contador);
    
    contador--;
    number.textContent = contador;

    if (number.textContent <= -1) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
});

buttonReset.addEventListener('click', (e) => {
    // console.info('Reset');
    // console.log(contador);
    
    contador = 0;
    number.textContent = contador;

    if (number.textContent == 0) {
        number.style.color = "black";
    }
});

buttonSumar.addEventListener('click', (e) => {
    // console.info('Sumar');
    // console.log(contador);
    
    contador++;
    number.textContent = contador;

    if (number.textContent >= 1) {
        number.style.color = "green";
    } else {
        number.style.color = "black";
    }
});