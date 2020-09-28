var w = window.innerWidth;
var h = window.innerHeight;
document.getElementById("sec-one").style.height = h + "px";
document.getElementById("sec-two").style.height = h + "px";
document.getElementById("sec-two-point").style.height = h + "px";
document.getElementById("sec-two-point-point").style.height = h + "px";
document.getElementById("sec-two").style.width = w + "px";
document.getElementById("sec-two-point").style.width = w + "px";
document.getElementById("sec-two-point-point").style.width = w + "px";
document.getElementById("sec-three").style.height = h + "px";

if(w < 500){
  document.getElementById("splash").src = "img/up 4-trojan logo motion 1.gif";
}
