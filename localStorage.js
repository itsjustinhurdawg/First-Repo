var namesArray=[];
function addnames(){
  namesArray.push(document.getElementById('names').value);
  document.getElementById('names').value = "";
}
function allDone(){
  localStorage.setItem('list'<namesArray);
  location.href="shownames.html";
}

function shownames(){
  var x = localStorage.getItem('list');
  document.getElementBYId('showAll').innerHTML=x;
}
