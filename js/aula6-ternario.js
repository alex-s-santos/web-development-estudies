let form = document.querySelector('#form');
let num = document.querySelector('#num');
let result = document.querySelector('#result');

form.addEventListener('submit', returnEvenOrOdd);
num.focus();



function returnEvenOrOdd(e) {
    e.preventDefault();

    const evenOrOdd = Number(num.value) % 2 === 0 ? 'PAR' : 'IMPAR';


    if(!num.value) {
        alert('O campo não pode estar vazio, insira um número');
        num.focus();
    } else {
        result.innerHTML = `O número: ${num.value}, é <span class="great">${evenOrOdd}</span>.`;
        num.value = "";
        num.focus();
    }
}