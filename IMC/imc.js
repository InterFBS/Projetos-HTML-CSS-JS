const calculate = document.getElementById('calculate')

function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result')

if (name !== '' && height !=='' && weight !== '') {
    //Aqui vamos o calculo do IMC
    const valueImc = (weight/(height * height)).toFixed(1);
    //Aqui vamos criar uma classificação para colocar no grau definido pelo calculo
    let classification = '';


    if (valueImc < 18.5) {
        classification = 'abaixo do peso.'
    } else if (valueImc < 25) {
        classification = 'com o peso ideal'
    } else if (valueImc < 30) {
        classification = 'levemente acima do peso'
    } else if (valueImc < 35) {
        classification = 'com obesidade grau 1'
    } else if (valueImc < 40) {
        classification = 'com obesidade grau 2'
    } else {
        classification = 'com obesisdade grau 3'
    }
    result.textContent =`${name} seu IMC é ${valueImc} e você ${classification}`;
    } else {
        result.textContent = 'Preencha os campos!!!';
    }
}
calculate.addEventListener('click', imc)
