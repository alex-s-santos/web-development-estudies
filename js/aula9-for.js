let form = document.querySelector('#form');
let numText = document.querySelector('#numText');
let number = document.querySelector('#number');


form.addEventListener('submit', run);

function run(e) {
    e.preventDefault();

    numText.innerHTML = number.value;
    numText.style.color = '#f2f2f2';
    numText.style.backgroundColor = 'dodgerblue';
    numText.style.border = '1px solid blue'; 
    numText.style.borderRadius = '5px'; 
    numText.style.padding = '0 2px';

    

}