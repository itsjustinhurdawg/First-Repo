function calculateArea(width,height){ //name the function//
var area = width * height; 
return area;
}
var simpleQuestion = prompt ("whats the width's number"); //ask a question by using prompt//
var questions = prompt ("whats the height's number?"); //ask another question
var wallOne = calculateArea(simpleQuestion, questions);
window.alert(wallOne);
