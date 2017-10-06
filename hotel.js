----HTML----
<select id="guestSelect1" onchange="chekout(this.value);">
<option> Select One: </option>
<option value="guest1"> Room 1</option>
<option value="guest2"> Room 2</option>
</select>
<h1 id="test">
</h1>
___JAVASCRIPT------
function checkout(value){
	var i = document.getElementById('guestSelect1').value;
  document.getElementById('test').innerHTML = i;
  document.getElementById('guestSelect1').selectedIndex = "0";
  
}
