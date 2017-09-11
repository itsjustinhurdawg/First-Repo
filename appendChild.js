--HTML--
<p>Click the button to create a P element with some text.</p>
<button onclick="myFunction()">Try it</button>

--Javascript--
function deathNote(){
var death = Math.floor(Math.random() * 4);
document.getElementsByClassName('stem')[death].innerHTML = "<img src='https://www.singularityweblog.com/wp-content/uploads/2016/02/Death.jpg' width='10%'>";
}
