function type(value, display) {


    const mathSymbols = ["+", "-", "/", "x"];
    const size = display.innerHTML.length;
    const valueIsMath = mathSymbols.includes(value);
    if (valueIsMath && mathSymbols.includes(display.innerHTML.charAt(size - 1)) || (valueIsMath && size === 0)) {
        return;
    }
    display.innerHTML += value;
    display.scrollLeft = display.scrollWidth;
}

function restartCalc(value, display) {
    display.innerHTML = value;
}


const writer = {type: type, restartCalc: restartCalc};
export default writer;