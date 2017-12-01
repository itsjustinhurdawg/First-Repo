--Javascript-- 
var food1 = {
name: "Spicy Ahi",
type: "Fish",
cost: 16,
madeBy:"Justin"
}


function buyAhi() {
var qty1 = document.getElementById('qty1').value;
var price = qty1 * food1.cost
document.getElementById('one').innerHTML = food1.name;
localStorage.setItem('x', food1.name);
locaion.href="page2.html";
}

function getStuff(){
var a = localStorage.getItem("x");
document.getElementById('showMe').innerHTML = a;
}
