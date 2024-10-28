let form = document.querySelector('#form');
let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let boxResult = document.querySelector('#boxResult');
let result = document.querySelector('#result');
let image = document.createElement('img');
let resultImc;
let imageName;
weight.focus();

boxResult.appendChild(image);
form.addEventListener('submit', calculateAndReturnImc);

function calculateAndReturnImc(e) {
    e.preventDefault();

    if(!weight.value || !height.value) {
        alert('⚠️Preencha todos os campos para continuar!⚠️');
    } else if (Number(weight.value) < 0 || Number(height.value <0)) {
        alert('⚠️Insira valores válidos, são aceitos apenas valores a cima de ZERO!');
    } else {
    

        let imc = Number(formatElement(weight.value)) / (Number(formatElement(height.value)) ** 2);

        if(imc < 16) {
            resultImc = '<span class="red alert">Magreza grave</span>'
            imageName = 'magro';
        } else if(imc < 16.9) {
            resultImc = '<span class="red">Magreza Moderada</span>'
            imageName = 'magro';
        } else if(imc <= 18.5) {
            resultImc = 'Magreza leve';
            imageName = 'magro';
        } else if(imc <= 24.9) {
            resultImc = '<span class="green">Peso ideal</span>'
            imageName = 'bom';
        } else if(imc <= 29.9) {
            resultImc = 'Sobrepeso'
            imageName = 'sobrepeso';
        } else if(imc <= 34.9) {
            resultImc = '<span class="red">Obesidade grau 1</span>'
            imageName = 'obeso';
        } else if(imc <= 39.9) {
            resultImc = '<span class="red">Obesidade grau 2 ou severa</span>'
            imageName = 'obeso';
        } else if(imc >= 40) {
            resultImc = '<span class="red alert">Obesidade mórbida</span>'
            imageName = 'obeso';
        } else {
            alert('Resultado inválido, tente novamente!');
        }


        result.innerHTML = `Seu IMC é: <span class="great">${imc.toFixed(1)}</span> | Resultado: <span class="great">${resultImc}!</span>`;
        createImageElement(imageName);
        weight.value = "";
        height.value = "";
        weight.focus();
    }
};


function createImageElement(img) {
    image.setAttribute('src', `../images/aula-7/${img}.png`);
    image.setAttribute('alt', `Imagem IMC ${img}`);
    image.setAttribute('class', "image-size");
};

function formatElement(value) {
    let num = value.replace(',', '.');

    return num;
};