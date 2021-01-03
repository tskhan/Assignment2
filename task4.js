var subject1 = parseInt(prompt("Enter Marks for Subject 1: "),10);
var subject2 = parseInt(prompt("Enter Marks for Subject 2: "),10);
var subject3 = parseInt(prompt("Enter Marks for Subject 3: "),10);
var total = subject1 + subject2 + subject3;
var percentage = total/300*100;
document.write("Total Marks:  300");
document.write("<br />");
document.write("Marks Obtained:  " + total);
document.write("<br />");
document.write("Percentage:  " + Math.round(percentage) + "%");
document.write("<br />");
if (percentage >= 80 ) {
  document.write("Grade:  " + "A-One");
  document.write("<br />");
  document.write("Remarks:  " + "Excellent");
}
else if (percentage < 80 && percentage >= 70 ) {
  document.write("Grade:  " + "A");
  document.write("<br />");
  document.write("Remarks:  " + "Good");
}
else if (percentage < 70 && percentage >= 60 ) {
  document.write("Grade:  " + "B");
  document.write("<br />");
  document.write("Remarks:  " + "You need to improve");
}
else {
  document.write("Grade:  Fail");
  document.write("<br />");
  document.write("Remarks:  Sorry");
}