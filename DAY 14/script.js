let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function toggleSign() {
    if (display.textContent !== '0' && display.textContent !== 'Error') {
        if (display.textContent.charAt(0) === '-') {
            display.textContent = display.textContent.slice(1);
        } else {
            display.textContent = '-' + display.textContent;
        }
    }
}

function appendNumber(number) {
    if (display.textContent === '0' || display.textContent === 'Error') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + operator;
    } else {
        display.textContent += operator;
    }
}

function calculate() {
    try {
        let expression = display.textContent
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        const result = eval(expression);
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}
