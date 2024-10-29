'use strict'

const form   = document.querySelector('#form');
const bill   = document.querySelector('#billAmount');
const tip    = document.querySelector('#tipPercentage');
const result = document.querySelector('.tip__total');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let factura = bill.value;
    let porcentaje = (1 + tip.value / 100);
    let resultado = (factura * porcentaje).toFixed(2);

    result.textContent = resultado;
});