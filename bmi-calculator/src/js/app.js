'use strict'

const form    = document.querySelector('#form');
const height  = document.querySelector('#height');
const weight  = document.querySelector('#weight');
const result  = document.querySelector('#result');
const message = document.querySelector('.weight__condition');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const BMI = weight.value / ((height.value / 100) ** 2);
    result.value = BMI;

    switch (true) {
        case (BMI <= 18.5):
            message.textContent = 'UnderWeight';
            console.info('UnderWeight');
            break;
    
        case (BMI > 18.5 && BMI <= 24.9):
            message.textContent = 'Normal Weight';
            console.info('Normal Weight');
            break;
        
        case (BMI >= 25 && BMI <= 29.9):
            message.textContent = 'OverWeight';
            console.info('OverWeight');
            break;
        
        case (BMI >= 30):
            message.textContent = 'Obesity';
            console.info('Obesity');
            break;

        default:
            result.textContent = 'Error';
            console.error('Error', BMI);
            break;
    }
})