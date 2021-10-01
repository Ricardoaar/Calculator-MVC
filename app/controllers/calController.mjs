import writer from "../bin/writer.js";
import calculate from "../bin/operator.js";


const state = {
    TYPING: 1,
    RESULT: 2
};
let currentState = state.TYPING;


function type(value, display) {
    if (value === "=") {
        calc(value, display.innerHTML);
    } else {
        if (currentState === state.TYPING) {
            writer.type(value, display)
        } else {
            writer.restartCalc(value, display);
            currentState = state.TYPING;
        }
    }
}

function restartCalc(display) {
    writer.restartCalc("", display);
}


function calc(display) {

    currentState = state.RESULT;
    let result = calculate(display.innerHTML);
    display.innerHTML = result;
}


const controller = {
    type: type, calc: calc, restart: restartCalc
}

export default controller;