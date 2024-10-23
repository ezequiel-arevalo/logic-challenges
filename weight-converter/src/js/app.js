'use strict'

const form      = document.querySelector("#form");
const weight    = document.querySelector("#weight");
const converted = document.querySelector("#converted__weight");

form.addEventListener('submit', (e) => {
   // Prevenimos el envio del formulario evitando que se recargue el sitio
   e.preventDefault();
});

weight.addEventListener('input', (e) => {
   let lb_weight = weight.value;
   let kg_weight = lb_weight / 2.20462;
   converted.textContent = Math.floor(kg_weight);
});
