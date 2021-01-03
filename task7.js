var a = parseInt(prompt("Enter first no."),10);
var b = parseInt(prompt("Enter second no."),10);
var c = prompt("Enter desired mathematical operation");
if (c === "+") {
  document.write("The sum is " + (a + b));
}
else if (c === "-") {
  document.write("The difference is " + (a - b));
}
else if (c === "*") {
  document.write("The product is " + (a * b));
}
else if (c === "/") {
  document.write("The division result is " + (a / b));
}
else if (c === "%") {
  document.write("The remainder is " + (a % b));
}
else {
  document.write("Wrong Input");
}