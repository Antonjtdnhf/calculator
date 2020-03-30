let num1 = +prompt("Enter your first number","");
let num2 = +prompt("Enter your second number","");
let action = prompt("Enter your action","+");

if (action === "+") {
    alert(num1 + num2);
}else if (action === "-") {
    alert(num1 - num2);
}else if (action === "*") {
    alert(num1 * num2);
}else if (action === "/") {
    alert(num1 / num2);
}else {
    alert("Wrong action or number!")
};
