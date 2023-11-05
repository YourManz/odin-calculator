const numberPad = document.querySelector('.main-buttons');
const charecterArray = [9, 8, 7, '+', 6, 5, 4, '-', 3, 2, 1, '*', '.', 0, '=', '/'];

let arrayCounter = 0;
for (let i = 0; i <= 3; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row-div');
        numberPad.appendChild(rowDiv);

        for (let index=0; index < 4; index++) {
            const buttonType = document.createElement('button');

            console.log(arrayCounter);
            // buttonType.classList.add(charecterArray[arrayCounter]);
            buttonType.classList.add('regular-button');
            buttonType.innerHTML = `${charecterArray[arrayCounter]}`;

            rowDiv.appendChild(buttonType);
            arrayCounter++;
        }
}