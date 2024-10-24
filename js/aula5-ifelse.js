let form = document.querySelector('#form');
let note1 = document.querySelector('#note1');
let note2 = document.querySelector('#note2');
let note3 = document.querySelector('#note3');
let result = document.querySelector('#result');

form.addEventListener('submit', returnAverage);

function returnAverage(e) {
    e.preventDefault();

    let studentResult;
    let average = (Number(note1.value) + Number(note2.value) + Number(note3.value)) / 3;
   
    if(Number(note1.value) > 10 || Number(note1.value) < 0 || Number(note2.value) > 10 || Number(note2.value) < 0 || Number(note3) > 10 || Number(note3.value) < 0) {
     
        alert('Você inseriu notas inválidas, coloque valores entre 0 e 10');
    
    } else if(!note1.value || !note2.value || !note3.value) {
    
        alert('Preencha todos os campos!');
    
    } else {
    
        if(average > 7) {
            studentResult = '<span class="green great">APROVADO</span>';
        } else {
            studentResult = '<span class="red great">REPROVADO</span>';
        }
        
        result.innerHTML = `Média: ${average.toFixed(1)} | Você está ${studentResult}!`;
        note1.value = "";
        note2.value = "";
        note3.value = "";
        note1.focus();
    
    }
}