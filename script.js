// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-number') || button.getAttribute('data-operator') || button.id;

            switch (value) {
                case 'clear':
                    clearDisplay();
                    break;
                case 'equals':
                    calculateResult();
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                case '^':
                    setOperator(value);
                    break;
                default:
                    appendNumber(value);
                    break;
            }
        });
    });

    function clearDisplay() {
        currentInput = '';
        operator = '';
        firstOperand = '';
        secondOperand = '';
        result = '';
        display.innerText = '0';
    }

    function appendNumber(number) {
        if (result) {
            result = '';
            currentInput = number;
        } else {
            currentInput += number;
        }
        display.innerText = currentInput;
    }

    function setOperator(op) {
        if (firstOperand && currentInput && operator) {
            calculateResult();
        } else {
            firstOperand = currentInput;
            operator = op;
            currentInput = '';
        }
    }

    function calculateResult() {
        secondOperand = currentInput;

        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            case '%':
                result = parseFloat(firstOperand) % parseFloat(secondOperand);
                break;
            case '^':
                result = Math.pow(parseFloat(firstOperand), 2);
                break;
        }
        result = parseFloat(result.toPrecision(10));
        display.innerText = result;
        currentInput = result;
        operator = '';
        firstOperand = '';
        secondOperand = '';
    }
});
