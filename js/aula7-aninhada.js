let form = document.querySelector('#form');
let weight = document.querySelector('#weight');
let height = document.querySelector('#height');
let boxResult = document.querySelector('#boxResult');
let result = document.querySelector('#result');
let image = document.createElement('img');
let imageName = 'sobrepeso';

boxResult.appendChild(image);
image.setAttribute('src', `../images/aula-7/${imageName}.png`);
image.setAttribute('alt', `Imagem IMC ${imageName}`);
image.setAttribute('class', "image-size");