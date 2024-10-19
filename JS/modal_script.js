var login_modal=document.querySelector("#login-modal");
var post_modal=document.querySelector("#post-modal");

var btn_close=document.querySelector(".btn-close");
btn_close.onclick=function(){
	login_modal.style.display = "none";
}

var span=document.getElementsByClassName("close")[0];

span.onclick=function(){
	post_modal.style.display = "none";
}

function loginModal() {
	login_modal.style.display = "block";
}

function postModal(){
	post_modal.style.display = "block";
}
