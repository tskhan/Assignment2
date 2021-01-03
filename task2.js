var trafficSigncolor = prompt("Enter Traffic Signal Color");
if (trafficSigncolor === "Red") {
  document.write("Must Stop");
}
else if (trafficSigncolor === "Yellow") {
  document.write("Ready to Move");
}
else if (trafficSigncolor === "Green") {
    document.write("Move Now");
}
else {
  document.write("Input is Wrong");
}