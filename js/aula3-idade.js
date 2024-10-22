const form = document.querySelector('#form');
const bornYear = document.querySelector('#bornYear');
const result = document.querySelector('#result');
let time = new Date;
form.addEventListener('submit', returnAge);

function returnAge(e) {
    e.preventDefault();

    let age = time.getFullYear() - Number(bornYear.value);

    result.innerHTML = `Idade atual: ${age} anos`;
    bornYear.value = "";
    bornYear.focus();
}