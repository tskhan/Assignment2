var a = 6;
var b = parseInt(prompt("Try to guess the secret no. between 1 & 10"),10);
if (b === a) {
  document.write("Bingo! Correct answer");
}
else if ((b - a) === 1) {
  document.write("Close enough to the correct answer");
}
else {
  document.write("You are no way near");
}