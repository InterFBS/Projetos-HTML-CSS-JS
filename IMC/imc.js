const calculate = document.getElementById('calculate')

function imc() {

    //criar constantes com os elementos do html
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result')
    

    //Criar as condições
    if (name !== '' && height !=='' && weight !== '') {
        //Aqui vamos o calculo do IMC
        const valueImc = (weight/(height * height)).toFixed(1);
        //Aqui vamos criar uma classificação para colocar no grau definido pelo calculo
        let classification = 'está com obesidade grau 3';
       //condições
        if (valueImc < 18.5) {
            classification = 'está abaixo do peso.'
    } else if (valueImc < 25) {
        classification = 'está com o peso ideal'
    } else if (valueImc < 30) {
        classification = 'levemente acima do peso'
    } else if (valueImc < 35) {
        classification = 'está com obesidade grau 1'
    } else if (valueImc < 40) {
        classification = 'está com obesidade grau 2'
    } else {
        classification = 'está com obesisdade grau 3'
    }
        //criar a caixa de resultado que irá enviar os dados preenchidos
    result.textContent =`${name} seu IMC é ${valueImc} e você ${classification}`;
    } 
        //Caso não esteja preenchido
        else {
        result.textContent = 'Preencha os campos!!!';
    }
}
//chama a função
calculate.addEventListener('click', imc)
