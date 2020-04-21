function init(){
  var eb = document.getElementById('entrybutton');
  var msg = document.getElementById('entryinput');	

eb.addEventListener('click', function() {
     alert('Griselda Pasillas: '+ msg.value);
  
document.getElementById('textoutput').innerHTML = msg.value;});
}
window.addEventListener('load', init);
