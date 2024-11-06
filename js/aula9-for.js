let form = document.querySelector('#form');
let numText = document.querySelector('#numText');
let number = document.querySelector('#number');
let result = document.querySelector('#result');

result.style.display = 'none';
form.addEventListener('submit', run);

function run(e) {
    e.preventDefault();

    numText.innerHTML = number.value;
    numText.style.color = '#f2f2f2';
    numText.style.backgroundColor = 'dodgerblue';
    numText.style.border = '1px solid blue'; 
    numText.style.borderRadius = '5px'; 
    numText.style.padding = '0 2px';

    result.style.display = 'block';
    result.style.width = '25%';
    result.style.backgroundColor = '#1e88e5';
    result.style.color = '#f2f2f2';
    result.style.borderRadius = '3px';
    result.style.height = '90px';

    for(let i = 1; i <= 10; i++) {
        result.innerHTML += `${number.value} x ${i} = ${number.value * i}<br>`;
    }

}