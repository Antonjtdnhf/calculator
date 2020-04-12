let currentValue = 0;
let operation = "";
let input = document.getElementById("input");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let button0 = document.getElementById("button0");
let buttonDot = document.getElementById("buttonDot");
let buttonBackspace = document.getElementById("buttonBackspace");
let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDivide = document.getElementById("buttonDivide");
let buttonEqual = document.getElementById("buttonEqual");
let buttonReset = document.getElementById("buttonReset");


function addNumbersToInput( eventObject ) {
    let clickedButton = eventObject.currentTarget;
    input.value += clickedButton.innerHTML;
}


function backspace() {
    var stringToCut;
    stringToCut = String(input.value);
    var cutedString = stringToCut.substring(0, stringToCut.length - 1);
    if (+cutedString === 0) {
        input.value = "";
    } else {
        input.value = cutedString;
    }
}



function plus() {
    switch (operation) {
        case "+" :
            operation = "+";
            currentValue += +(input.value);
            input.value = "";
            break;
        case "-" :
            operation = "+";
            currentValue -= +(input.value);
            input.value = "";
            break;
        case "*" :
            operation = "+";
            currentValue *= +(input.value);
            input.value = "";
            break;
        case "/" :
            operation = "+";
            currentValue /= +(input.value);
            input.value = "";
            break;
        case "=" :
            operation = "+";
            currentValue = +(input.value);
            input.value = "";
            break;
        case "" :
            operation = "+";
            currentValue = +(input.value);
            input.value = "";
            break;
    }
}

function minus() {
    switch (operation) {
        case "+" :
            operation = "-";
            currentValue += +(input.value);
            input.value = "";
            break;
        case "-" :
            operation = "-";
            currentValue -= +(input.value);
            input.value = "";
            break;
        case "*" :
            operation = "-";
            currentValue *= +(input.value);
            input.value = "";
            break;
        case "/" :
            operation = "-";
            currentValue /= +(input.value);
            input.value = "";
            break;
        case "=" :
            operation = "-";
            currentValue = +(input.value);
            input.value = "";
            break;
        case "" :
            operation = "-";
            currentValue = +(input.value);
            input.value = "";
            break;
    }
}

function multiply() {
    switch (operation) {
        case "+" :
            operation = "*";
            currentValue += +(input.value);
            input.value = "";
            break;
        case "-" :
            operation = "*";
            currentValue -= +(input.value);
            input.value = "";
            break;
        case "*" :
            operation = "*";
            currentValue *= +(input.value);
            input.value = "";
            break;
        case "/" :
            operation = "*";
            currentValue /= +(input.value);
            input.value = "";
            break;
        case "=" :
            operation = "*";
            currentValue = +(input.value);
            input.value = "";
            break;
        case "" :
            operation = "*";
            currentValue = +(input.value);
            input.value = "";
            break;
    }
}

function divide() {
    switch (operation) {
        case "+" :
            operation = "/";
            currentValue += +(input.value);
            input.value = "";
            break;
        case "-" :
            operation = "/";
            currentValue -= +(input.value);
            input.value = "";
            break;
        case "*" :
            operation = "/";
            currentValue *= +(input.value);
            input.value = "";
            break;
        case "/" :
            operation = "/";
            currentValue /= +(input.value);
            input.value = "";
            break;
        case "=" :
            operation = "/";
            currentValue = +(input.value);
            input.value = "";
            break;
        case "" :
            operation = "/";
            currentValue = +(input.value);
            input.value = "";
            break;
    }
}


function equal() {
    switch (operation) {
        case "+" :
            input.value = currentValue + +(input.value);
            currentValue = +(input.value);
            operation = "=";
            break;
        case "-" :
            input.value = currentValue - +(input.value);
            currentValue = +(input.value);
            operation = "=";
            break;
        case "*" :
            input.value = currentValue * +(input.value);
            currentValue = +(input.value);
            operation = "=";
            break;
        case "/" :
            input.value = currentValue / +(input.value);
            currentValue = +(input.value);
            operation = "=";
            break;
    }
}

function reset() {
    input.value = "";
    currentValue = 0;
    operation = "";
}


buttonPlus.addEventListener("click", plus);
buttonMinus.addEventListener("click", minus);
buttonMultiply.addEventListener("click", multiply);
buttonDivide.addEventListener("click", divide);
buttonEqual.addEventListener("click", equal);
buttonReset.addEventListener("click", reset);




button1.addEventListener("click", addNumbersToInput);
button2.addEventListener("click", addNumbersToInput);
button3.addEventListener("click", addNumbersToInput);
button4.addEventListener("click", addNumbersToInput);
button5.addEventListener("click", addNumbersToInput);
button6.addEventListener("click", addNumbersToInput);
button7.addEventListener("click", addNumbersToInput);
button8.addEventListener("click", addNumbersToInput);
button9.addEventListener("click", addNumbersToInput);
button0.addEventListener("click", addNumbersToInput);
buttonDot.addEventListener("click", addNumbersToInput);

buttonBackspace.addEventListener("click", backspace);
