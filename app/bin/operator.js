const mathSymbols = ["+", "-", "/", "x"];
let numbers = [];
var operations = [];

let result = 0;


function calculate(operation) {

    switch (operation) {
        case "+":
            sum(numbers.shift());
            break;
        case "-":
            subtract(numbers.shift())
            break;
        case "x":
            multiply(numbers.shift())
            break;
        case "/":
            divide(numbers.shift())
            break;
        default:

            if (operation) {
                splitValues(operation);
                return calculate(operations.shift());
            } else {
                setTimeout(() => {
                    result = 0;
                }, 100);
                return result;
            }

    }
    return calculate(operations.shift());
}


function sum(value) {
    result += parseInt(value);

}

function subtract(value) {
    result -= parseInt(value);
    // return calculate(operations.shift());

}

function multiply(value) {
    result *= parseInt(value);
    // return calculate(operations.shift());

}

function divide(value) {
    result /= parseInt(value);
    // return calculate(operations.shift());

}


function splitValues(operation) {
    for (let i = 0; i < operation.length; i++) {
        if (mathSymbols.includes(operation.charAt(i))) {
            operations.push(operation.charAt(i));
        }
    }
    operations.unshift("+");

    mathSymbols.map((sym) => {
        if (numbers.length === 0) {
            numbers = operation.split(sym);
        } else {
            numbers = numbers.toString().split(sym);
        }
    });
    numbers = numbers.toString().split(",");
}

// console.log(calculate("3+5+5-2/3"));


export default calculate;