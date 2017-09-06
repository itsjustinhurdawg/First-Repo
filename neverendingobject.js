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
