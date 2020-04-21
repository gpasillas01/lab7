function init(){
var name = document.getElementsByClassName('center')[1];  
var button1 = document.getElementById('entrybutton');
var results = document.getElementById('textoutput');
var input1 = document.getElementById('entryinput'); 
 button1.addEventListener('click', alertMeClicked);
}   
function alertMeClicked(){
  alert(name.textContent + ":"+ input1.value);
  results.innerHTML = input1.value;  
}
window.addEventListener('load', init);
