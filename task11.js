var inputTime = parseInt(prompt("Enter the time in 2400 hrs. format"),10);
if (inputTime >= 0000 && inputTime < 1200) {
 document.write("Good Morning"); 
}
else if (inputTime >= 1200 && inputTime < 1700) {
 document.write("Good Afternoon"); 
}
else if (inputTime >= 1700 && inputTime < 2100) {
 document.write("Good Evening"); 
}
else if (inputTime >= 2100 && inputTime < 2359) {
  document.write("Good Night");
}
else {
  document.write("Wrong Input");
}