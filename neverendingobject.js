var stem = {
roomNumber:"F103",
students: 18,
}

var userInput = prompt("roomNumber or students");
var lowerCase = userInput.toLowerCase();
if((lowerCase === "roomNumber") ||(lowerCase === "students")) {
window.alert(stem[lowerCase]);
}
else{
askAgain();
}

function askAgain() {
var stem = {
roomNumber:"F103",
students: 18,
}

var userInput = prompt("roomNumber or students");
var lowerCase = userInput.toLowerCase();
if((lowerCase === "roomNumber") ||(lowerCase === "students")) {
window.alert(stem[lowerCase]);
}
else{
askAgain();
}
}

// Updated to only have 3 tries.
var stem = {
  roomNumber: "F103",
  students: 18
};

var userInput = prompt("roomNumber or students");
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "roomNumber") || (lowerCase === "students")) {
  window.alert(stem[lowerCase]);
} 
else {
  for (i = 1; i < 3; i++) {
  var userInput = prompt("roomNumber or students. You have tried" +i+"times");
var lowerCase = userInput.toLowerCase();
if ((lowerCase === "roomNumber") || (lowerCase === "students")) {
  window.alert(stem[lowercase]);
		} 
  }
}
