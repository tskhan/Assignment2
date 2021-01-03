var trafficSigncolor = prompt("Enter Traffic Signal Color");
if (trafficSigncolor === "Red"|| trafficSigncolor === "red") {
  document.write("Must Stop");
}
else if (trafficSigncolor === "Yellow" || trafficSigncolor === "yellow") {
  document.write("Ready to Move");
}
else if (trafficSigncolor === "Green" || trafficSigncolor === "green") {
    document.write("Move Now");
}
else {
  document.write("Input is Wrong");
}