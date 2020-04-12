let currentValue = 0;
let operation = "";
let input = document.getElementById("input");

let buttonsOfNumbers = document.getElementsByClassName("buttonsOfNumbers");

let operationButtons = document.getElementsByClassName("operationButtons");

let buttonEqual = document.getElementById("buttonEqual");
let buttonReset = document.getElementById("buttonReset");
let buttonBackspace = document.getElementById("buttonBackspace");

buttonBackspace.addEventListener("click", backspace);
buttonReset.addEventListener("click", reset);
buttonEqual.addEventListener("click", equal);


for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", makeOperation);
}

for (let i = 0; i < buttonsOfNumbers.length; i++) {
    buttonsOfNumbers[i].addEventListener("click", addNumbersToInput);
}

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

function reset() {
    input.value = "";
    currentValue = 0;
    operation = "";
}

function makeOperation(eventObject) {
    let clickedButton = eventObject.currentTarget;
    switch (operation) {
        case "+" :
            operation = clickedButton.innerHTML;
            currentValue += +(input.value);
            input.value = "";
            break;
        case "-" :
            operation = clickedButton.innerHTML;
            currentValue -= +(input.value);
            input.value = "";
            break;
        case "*" :
            operation = clickedButton.innerHTML;
            currentValue *= +(input.value);
            input.value = "";
            break;
        case "/" :
            operation = clickedButton.innerHTML;
            currentValue /= +(input.value);
            input.value = "";
            break;
        case "=" :
            operation = clickedButton.innerHTML;
            currentValue = +(input.value);
            input.value = "";
            break;
        case "" :
            operation = clickedButton.innerHTML;
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


