//a.
var a = 4;
if (++a === 5) {
//  5 = 5 (true, so alert will run)
alert("given condition for variable a is true");
}


//b.
var b = 82;
if (b++ === 83){
  //82 = 83 (false so no alert)
alert("given condition for variable b is true");
}


//c.
var c = 12;
if (c++ === 13){
  // 12 = 13 (false, so no alert)
alert("condition 1 is true");
}
if (c === 13){
  // 13 = 13 (true, so alert will run)
alert("condition 2 is true");
}
if (++c < 14){
  //14<14 (false, so no alert)
alert("condition 3 is true");
}
if(c === 14){
  //14=14 (true, so alert will run)
alert("condition 4 is true");
}


//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
//  22000      =   2000     +  20000 (true, so alert will run)
alert("The cost equals");
}


//e.
if (true){
  //condition is true, alert will run)
  alert("True");
}
if (false){
  //as the value is false, there will not be any further execution, therfore, no alert.
  alert("False");
}


//f.
if("car" < "cat"){
  //since the first two alphabets are same and since r has a lower alphabatical order as comapred to t, therefore the condition is true and an alert will run.
  alert("car is smaller than cat");
}