var a = 6;
var b = prompt("Try to guess the secret no. between 1 & 10");
if (b === a) {
  document.write("Bingo! Correct answer");
}
else if (b === ++b) {
  document.write("Close enough to the correct answer");
}
else {
  docuemnt.write("You are no way near");
}