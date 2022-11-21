const  buttonsContainer = document.querySelector(".buttons");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const screen = document.querySelector(".screen-number");
const screenPrev = document.querySelector(".previous-number");
const clearAll = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const back = document.querySelector(".back");
const dot = document.querySelector(".dot");

let number = "";
let operator = "";
let previousNumber = "";

numbers.forEach(button => button.addEventListener("click", (e) => {
    number += e.target.textContent;
    screen.textContent = number;
}))

operators.forEach(button => button.addEventListener("click", calculate))

clearAll.addEventListener("click", (e) => {
    screenPrev.textContent = "";
    screen.textContent = "0";
    number = "";
    operator = "";
    previousNumber = "";
});

back.addEventListener("click", (e) => {
    if(screen.textContent !== '0') {
        screen.textContent = screen.textContent.slice(0, -1);
        number = screen.textContent;
    }
});

dot.addEventListener("click", (e) => {
    if(!(number.includes('.'))) {
        number += '.';
        screen.textContent = number;
    }
});

function calculate(e) {
    if(number === '') return;
    if(previousNumber !== '') {
        previousNumber = operate(previousNumber, number, operator);
        screen.textContent = '';
    }
    operator = e.target.textContent;
    if(previousNumber === '') {
        previousNumber = number;
    }
    if(operator !== '=') {
        screenPrev.textContent = previousNumber + " " + operator;
        screen.textContent = "";
        number = "";
    } else {
        screenPrev.textContent = previousNumber + " ";  
        screen.textContent = previousNumber;
        number = previousNumber;
        previousNumber = '';
    }
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        alert("Cannot divide by 0");
        return a;
    }
    return a/b;
}

function operate(first, second, operator) {
    const a = Number(first);
    const b = Number(second);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return null;
    }

}