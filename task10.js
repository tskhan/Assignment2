var a = "Karachi12345"
var b = prompt("Enter your password");
if (b === "" || b === null) {
  alert("Input Password")
}
else if (b === "Karachi12345") {
  document.write("Correct! The password you entered matches the original password");
}
else {
  document.write("Incorrect Password");
}