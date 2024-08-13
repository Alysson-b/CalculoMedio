
let numbers = [];

function addNumber() {
    let numberInput = document.querySelector('.number');
    let number = parseFloat(numberInput.value);
    
    if (isNaN(number)) {
        alert('Insira um número válido')
        return
    }
    
    numbers.push(number)
    updateNumberList()
    numberInput.value = ''
}

function updateNumberList() {
    let numbersList = document.querySelector('.numbers-list');
    numbersList.innerHTML = ''; 

    numbers.forEach((num, index) => {
        let p = document.createElement('p');
        p.textContent = `Número ${index + 1}: ${num}`;
        numbersList.appendChild(p);
    });
}

function mediaAlunos() {
    if (numbers.length === 0) {
        alert('Adicione alguns números antes de calcular a média');
        return;
    }

    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let media = sum / numbers.length;

    let result = document.querySelector('.result');
    result.textContent = `A média é: ${media}`;
}
