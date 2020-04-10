
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
let buttonDelete = document.getElementById("buttonDelete");
let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDivide = document.getElementById("buttonDivide");
let buttonEqual = document.getElementById("buttonEqual");
let buttonReset = document.getElementById("buttonReset");



function addNumber1() {
    input.value += 1;
}
function addNumber2() {
    input.value += 2;
}
function addNumber3() {
    input.value += 3;
}
function addNumber4() {
    input.value += 4;
}
function addNumber5() {
    input.value += 5;
}
function addNumber6() {
    input.value += 6;
}
function addNumber7() {
    input.value += 7;
}
function addNumber8() {
    input.value += 8;
}
function addNumber9() {
    input.value += 9;
}
function addNumber0() {
    input.value += 0;
}
function addDot() {
    input.value += ".";
}
function asd() {
    input.value /= 10;
    input.value = Math.floor(input.value);
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


button1.addEventListener("click", addNumber1);
button2.addEventListener("click", addNumber2);
button3.addEventListener("click", addNumber3);
button4.addEventListener("click", addNumber4);
button5.addEventListener("click", addNumber5);
button6.addEventListener("click", addNumber6);
button7.addEventListener("click", addNumber7);
button8.addEventListener("click", addNumber8);
button9.addEventListener("click", addNumber9);
button0.addEventListener("click", addNumber0);
buttonDot.addEventListener("click", addDot);
buttonDelete.addEventListener("click", asd);