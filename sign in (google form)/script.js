var password=document.getElementById("password")
var checkbox=document.getElementById("show")

checkbox.addEventListener("click",function(){

var type=password.getAttribute("type")=="password"?"text":"password";
password.setAttribute("type",type);
})
