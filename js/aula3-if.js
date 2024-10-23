let form = document.querySelector('#form');
let carSpeed = document.querySelector('#carSpeed');
let result = document.querySelector('#result');

form.addEventListener('submit', returnFined);

function returnFined(e) {
    e.preventDefault();

    result.innerHTML = `Velocidade: ${carSpeed.value}km/h, Dirija com segurança! <br>`;

    if(Number(carSpeed.value) > 60) {
        result.innerHTML += '⚠️Você foi multado!⚠️';
    }

    carSpeed.value = "";
}