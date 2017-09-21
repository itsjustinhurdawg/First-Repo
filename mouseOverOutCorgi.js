--HTML--
<img src ="http://www.barnwoodaussies.net/litters/chaseXsky11/images/Copy-sit.jpg" id = "corgi" onmouseOver= "goAway()" onmouseOut="comeBack()" width="30%">

--JAVASCRIPT--
function goAway(){
document.getElementById('corgi').style.visibility ="hidden";
 }
function comeBack(){
document.getElementById('corgi').style.visibility="visible"
}
