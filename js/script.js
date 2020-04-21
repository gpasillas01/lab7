function init(){
	
  var input = document.getElementById('entryinput');
	
  var output = document.getElementById('textoutput');
	
  var button = document.getElementById('entrybutton');
	
	button.addEventListener('click', 
   function(){
    output.innerHTML = input.value;
    alert("Griselda Pasillas: " + input.value);});}

window.addEventListener('load', init);


