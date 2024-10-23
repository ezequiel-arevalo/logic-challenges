'use strict'

const years = document.querySelector('.counter__user_age');
const form  = document.querySelector('#form');
const age   = document.querySelector('#age');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let anoActual = new Date();
    let year = parseInt(anoActual.getFullYear());
    let yearsOld = parseInt(age.value.slice(0, 4))
    years.textContent = year - yearsOld;
})
