let form = document.querySelector('#form');
let requestedValue = document.querySelector('#requestedValue');
let installments = document.querySelector('#installments');
let result = document.querySelector('#result');

requestedValue.focus();
form.addEventListener('submit', run);

function run(e) {
    e.preventDefault();

    let optNumber = Number(installments.value);


    result.innerHTML = requestedValue.value;

    requestedValue.value = "";
    requestedValue.focus();
}