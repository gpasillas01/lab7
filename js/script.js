function init(){
 var button1 = document.getElementById('entrybutton');
 
 var input1 = document.getElementById('entryinput'); 
 
 var results = document.getElementById('textoutput');
  
  var name = document.getElementsByClassName('center')[1]; 
function alertFunction(){
	alert(name.textContent + ': ' + message.value);
}

function outputFunction(){
	display.innerHTML = message.value;
}

button.addEventListener('click', alertFunction);
button.addEventListener('click', outputFunction);
}
window.addEventListener('load', init);
