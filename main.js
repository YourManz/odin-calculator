const numberPad = document.querySelector('.buttons');
const charecterArray = [9, 8, 7, '+', 6, 5, 4, '-', 3, 2, 1, '*', '.', 0, '=', '/'];

let inputValue = '';
let storredValue = 0;

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
            storredValue = Number(workingNumber.innerHTML);
            storredNumber.innerHTML = storredValue;
        } else if (!storredValue == '0') {
            storredValue += Number(workingNumber);
            storredNumber.innerHTML = storredValue;
        };
        workingNumber.innerHTML = '0';

    } else if (event === '-') {
        if (storredValue == '0') {
            storredValue = Number(workingNumber.innerHTML);
            storredNumber.innerHTML = storredValue;
        } else if (!storredValue == '0') {
            storredValue -= Number(workingNumber);
            storredNumber.innerHTML = storredValue;
        };
        workingNumber.innerHTML = '0';

    } else if (event === '*') {
        if (storredValue == '0') {
            storredValue = Number(workingNumber.innerHTML);
            storredNumber.innerHTML = storredValue;
        } else if (!storredValue == '0') {
            storredValue = storredValue * Number(workingNumber);
            storredNumber.innerHTML = storredValue;
        };
        workingNumber.innerHTML = '0';

    } else if (event === '/') {
        if (storredValue == '0') {
            storredValue = Number(workingNumber.innerHTML);
            storredNumber.innerHTML = storredValue;
        } else if (!storredValue == '0') {
            storredValue += Number(storredValue) / Number(workingNumber);
            storredNumber.innerHTML = storredValue;
        };
        workingNumber.innerHTML = '0';

    } else if (event === '.') {
        
    } else if (event === '=') {
        
    }
}