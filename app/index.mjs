import controller from "./controllers/calController.mjs"


let numbers = Array.from(document.querySelectorAll(".btn"));
let display = document.querySelector('#display');
let restart = document.querySelector("#restart");

let calculate = document.querySelector("#calculate");


for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', () => controller.type(number.innerHTML, display));
}

calculate.addEventListener("click", () => controller.calc(display));
restart.addEventListener("click", () => controller.restart(display));
