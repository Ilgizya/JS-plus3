const firstNumber = document.querySelector('.firstNum')
const buttonPlusEl = document.querySelector('.buttonPlus')
const resyltEl = document.querySelector('.result')

let counter = 0
firstNumber.textContent = counter
resyltEl.textContent = counter

buttonPlusEl.addEventListener('click', function (e) {
    firstNumber.textContent = counter
    counter += 3
    resyltEl.textContent = counter
})