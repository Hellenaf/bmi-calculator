const calculate = document.querySelector('#calculate');

function bmi () {
    const altura = +document.querySelector('#altura').value;
    const peso = +document.querySelector('#peso').value;
    const calculated = document.querySelector('#calculated');

    if (altura !== '' && peso !== '') {
        
        const valueBMI = (peso / (altura * altura)).toFixed(1);
    
        let classification = '';
    
        if (valueBMI < 18.5) {
            classification = 'abaixo do peso';
        } else if (valueBMI < 25) {
            classification = 'peso ideal';
        } else if (valueBMI < 30) {    
            classification = 'pouco acima do peso';
        } else if (valueBMI < 35) {
            classification = 'obesidade grau I';
        } else if (valueBMI < 40) {
            classification = 'obesidade grau II';
        } else {
            classification = 'obesidade mórbida, grau III';
        }
            calculated.textContent = `BMI: ${valueBMI} Estado: ${classification} `;
    
        } else {
            calculated.textContent = 'Preencha todos os campos!'
        }
}

calculate.addEventListener('click', bmi);

