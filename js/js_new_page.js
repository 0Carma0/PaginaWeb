/**/

var button = [document.getElementById("Button1"),document.getElementById("Button2"),
document.getElementById("Button3"),document.getElementById("Button4")];
var content = [document.getElementById("ex1"),document.getElementById("ex2"),
document.getElementById("ex3"),document.getElementById("ex4")];

button[0].onclick = function(){
	active(0);
	desactive(1);
	desactive(2);
	desactive(3);
}
button[1].onclick = function(){
	desactive(0);
	active(1);
	desactive(2);
	desactive(3);
}
button[2].onclick = function(){
	desactive(0);
	desactive(1);
	active(2);
	desactive(3);
}
button[3].onclick = function(){
	desactive(0);
	desactive(1);
	desactive(2);
	active(3);
}
function active(number){
	content[number].style.height = "150px";
	content[number].style.opacity = "1";
	content[number].style.display = "block";
}
function desactive(number){
	content[number].style.height = "0px";
	content[number].style.opacity = "0";
	content[number].style.display = "none";
}
