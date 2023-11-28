const numberPad = document.querySelector('.buttons');
const charecterArray = [9, 8, 7, '+', 6, 5, 4, '-', 3, 2, 1, '*', '.', 0, '=', '/'];
const clearButton = document.querySelector('.js-clear');

clearButton.addEventListener('click', ( ) => clear());
function clear() {
    inputValue = '0';
    storredValue = 0;
    workingNumber.innerHTML = inputValue;
    storredNumber.innerHTML = storredValue;
}

let inputValue = '';
let storredValue = 0;
let operatorSelection = '';
let operatorList = ['+', '-', '*', '/'];

let arrayCounter = 0;

addRows();

function addRows() {
    for (let i = 0; i <= 3; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        numberPad.appendChild(rowDiv);
        addButtons(rowDiv);
}
function addButtons(rowDiv) {
    for (let index=0; index < 4; index++) {
        const buttonType = document.createElement('button');
        buttonType.classList.add('regular-button');
        buttonType.innerHTML = `${charecterArray[arrayCounter]}`;
        arrayCounter++;
        rowDiv.appendChild(buttonType);
        if (typeof charecterArray[arrayCounter-1] === 'string') {
            buttonType.classList.add(charecterArray[arrayCounter-1]);
        }
        buttonType.addEventListener('click', (event) => {
            let operatorChoice = operatorSelection || event.target.innerHTML;;
            if (event.target.classList.length >= 2) {
                if (event.target.innerHTML === '.') {
                    return;
                } else if (event.target.innerHTML === '=') {
                    equals();
                    return;
                } else {
                    operatorChoice = event.target.innerHTML;
                    equals()
                };
            } else {
                pressedNumber(event.target) 
            }
            });
        };  
    };
};

const workingNumber = document.querySelector('.working')
let storredNumber = document.querySelector('.previous')
function pressedNumber(event) {
    inputValue = inputValue + event.innerHTML;
    workingNumber.innerHTML = inputValue;
}

function pickOperator() {
    if (storredNumber.innerHTML == '0') {
        storredNumber.innerHTML = workingNumber.innerHTML;
        return;
    }
    const operators = {
        '+': (a,b) => Number(a) + Number(b),
        '-': (a,b) => Number(a) - Number(b),
        '*': (a,b) => Number(a) * Number(b),
        '/': (a,b) => Number(a) / Number(b)
    } // I got the idea for this code from chatGPT :( i knew I didn't want to just code a bunch of if statments and this seemed elegant
    storredNumber.innerHTML = operators[operatorChoice](storredNumber.innerHTML, workingNumber.innerHTML);
};

function equals() {
        pickOperator();
        inputValue = '';
        workingNumber.innerHTML = '0';
        operatorSelection = operatorChoice;
};