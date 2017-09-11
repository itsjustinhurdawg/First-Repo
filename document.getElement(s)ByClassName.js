--HTML--
<p class="stem"> Donald Trump</p>
<p class="stem">Hitler</p>
<p class="stem">Kim Jong Un</p>
<p class="stem"> Vladimir Putin</p>

<button onclick="deathNote()">Random death</button>

--Javacript--
function deathNote(){
var death = Math.floor(Math.random() * 4);
document.getElementsByClassName('stem')[death].innerHTML = "X";
}
