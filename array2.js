var favFoods = ["bacon", "Lettuce", "Tomato"];

var newFood = prompt("What do you want to replace bacon with?");
//Ask user for new food and save as newFood
favFoods[0] = newFood;
//Replace index 0 with what the user said
window.alert(favFoods[0] +" " + favFoods[1]+ " " + favFoods[2]);
//Output all values of the array to the screen
