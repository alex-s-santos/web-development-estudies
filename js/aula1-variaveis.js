const form = document.querySelector('#form');
const result = document.querySelector('#result');
form.addEventListener('submit', returnSaudation);

function returnSaudation(e) {
    e.preventDefault();

    const name = document.querySelector('#name');

    result.innerHTML = `Olá, mundo! Eu sou o ${name.value}!`; 
}