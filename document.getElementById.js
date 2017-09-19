--HTML--
<span id ="name"></span>
<span> went to the store and </span>
<span id="verb"></span>
<span> a rock </span>

--JAVASCRIPT--
var x = prompt("Enter a name"); //asking user for their name
var y = prompt ("Enter a verb");//asking user for the verb

document.getElementById('name').innerHTML = x;//you get the element from HTML
document.getElementById('verb').innerHTML = y;//Then you put it in, document.getElementById.
