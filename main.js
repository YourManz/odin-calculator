const numberPad = document.querySelector('.buttons');
const charecterArray = [9, 8, 7, '+', 6, 5, 4, '-', 3, 2, 1, '*', '.', 0, '=', '/'];

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
                console.log(event.target.innerHTML)
            })

            rowDiv.appendChild(buttonType);
            arrayCounter++;
        }
}