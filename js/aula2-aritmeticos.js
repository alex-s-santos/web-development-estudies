const form = document.querySelector('#form');
const num1 = document.querySelector('#number1');
const num2 = document.querySelector('#number2');
const result = document.querySelector('#result');

form.addEventListener('submit', returnSum);

function returnSum(e) {
    e.preventDefault();
    const sum = Number(num1.value) + Number(num2.value);

    result.innerHTML = `A soma entre ${num1.value} e ${num2.value} é ${sum}.`;
    num1.value = "";
    num2.value = "";
}