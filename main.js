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

let arrayCounter = 0;
for (let i = 0; i <= 3; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        numberPad.appendChild(rowDiv);
        
        for (let index=0; index < 4; index++) {
            const buttonType = document.createElement('button');
            buttonType.classList.add('regular-button');
            buttonType.innerHTML = `${charecterArray[arrayCounter]}`;
            if (typeof charecterArray[arrayCounter] === 'string') {
                buttonType.classList.add(charecterArray[arrayCounter]);
            }
            buttonType.addEventListener('click', (event) => {
                if (event.target.classList.length >= 2) {
                    pickOperator(event.target.innerHTML)
                    return;
                }
                pressedNumber(event.target)
            })

            rowDiv.appendChild(buttonType);
            arrayCounter++;
        }
}

const workingNumber = document.querySelector('.working')
const storredNumber = document.querySelector('.previous')
function pressedNumber(event) {
    inputValue = inputValue + event.innerHTML;
    workingNumber.innerHTML = inputValue;
}

function pickOperator(event) {
    if (event === '+') {
        if (storredValue == '0') {
            storredValue = workingNumber.innerHTML;
            storredNumber.innerHTML = storredValue;
            inputValue = '0';
        } else if (!storredValue == '0') {
            storredValue = Number(storredNumber.innerHTML) + Number(workingNumber.innerHTML);
            storredNumber.innerHTML = storredValue;
            inputValue = '0';
            makesEquals();
        };
        operatorSelection = '+';
        workingNumber.innerHTML = '0';

    } else if (event === '-') {
        if (storredValue == '0') {
            storredValue = workingNumber.innerHTML;
            storredNumber.innerHTML = storredValue;
            inputValue = '0';
        } else if (!storredValue == '0') {
            storredValue = Number(storredNumber.innerHTML) - Number(workingNumber.innerHTML);
            storredNumber.innerHTML = storredValue;
            inputValue = '0';
            makesEquals();
        };
        operatorSelection = '-';
        workingNumber.innerHTML = '0';

    } else if (event === '*') {
        if (storredValue == '0') {
            storredValue = workingNumber.innerHTML;
            storredNumber.innerHTML = storredValue;
            inputValue = '0';
        } else if (!storredValue == '0') {
            storredValue = Number(storredNumber.innerHTML) * Number(workingNumber.innerHTML);
            storredNumber.innerHTML = storredValue;
            inputValue = '0';
            makesEquals();
        };
        operatorSelection = '*';
        workingNumber.innerHTML = '0';

    } else if (event === '/') {
        if (storredValue == '0') {
            storredValue = workingNumber.innerHTML;
            storredNumber.innerHTML = storredValue;
        } else if (!storredValue == '0') {
            storredValue += Number(storredNumber.innerHTML) / Number(workingNumber.innerHTML);
            storredNumber.innerHTML = storredValue;
            inputValue = '0';
            makesEquals();
        };
        operatorSelection = '+';
        operatorSelection = '/';
        workingNumber.innerHTML = '0';

    } else if (event === '.') {
        
    } else if (event === '=') {
        makesEquals()
    };
};

function makesEquals() {
    if (storredNumber === '0') {
        storredNumber.innerHTML = workingNumber.innerHTML;
    } else {
        pickOperator(operatorSelection);
        
    };
};