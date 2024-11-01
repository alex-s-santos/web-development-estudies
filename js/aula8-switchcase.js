let form = document.querySelector('#form');
let requestedValue = document.querySelector('#requestedValue');
let installments = document.querySelector('#installments');
let result = document.querySelector('#result');
let boxResult = document.querySelector('#boxResult');

requestedValue.focus();
form.addEventListener('submit', run);

function run(e) {
    e.preventDefault();
    boxResult.style.display = 'block';

    let optNumber = Number(installments.value);
    let valueNumber = Number(requestedValue.value);
    let finalValue;

    if(!requestedValue.value) {

        alert('⚠️Preencha o valor para continuar!⚠️');

    } else if(valueNumber === 'NaN') {
        boxResult.style.display = 'none';
        alert('⚠️Digite apenas números!⚠️');

    } else {

       finalValue = calculateInterest(optNumber,valueNumber);
       
       result.innerHTML = valueNumber + 1;
       //result.innerHTML = `<span class="great">${formatValueToCurrency(finalValue)}</span><br>Composição:<br>Valor solicitado: ${formatValueToCurrency(Number(requestedValue.value))} | Juros: <span class="red">${formatValueToCurrency(finalValue - valueNumber)}</span> <br> Em ${optNumber}X de <span class="green">${formatValueToCurrency(finalValue / optNumber)}<span>.`;
    }


    requestedValue.value = "";
    requestedValue.focus();
}

function calculateInterest(opt, value) {

    let interestValue;
    const INTEREST_PERCENTAGE = 0.03;

    switch(opt) {
        case 1:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 2:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 3:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 4:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 5:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 6:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 7:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 8:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 9:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 10:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 11:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        case 12:
            interestValue = value * ((1 + INTEREST_PERCENTAGE) ** opt);
        break

        default:
            alert('⚠️Valor inválido, tente novamente!⚠️');
    }

    return interestValue;
}

const formatValueToCurrency = num => num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});