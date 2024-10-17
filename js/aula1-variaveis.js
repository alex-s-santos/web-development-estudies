let result = document.querySelector("#result");

function returnSaudation() {
    let name = document.querySelector("#name");
    let saudation = `Olá, mundo! Eu sou o ${name.value}`;
    
    result.innerHTML = saudation;

}
