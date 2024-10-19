var username=document.querySelector("#username");
var email=document.querySelector("#email");
var pword=document.querySelector("#pword");


var btn_create=document.querySelector("#create");

btn_create.onclick=function(){

	if(username.value.trim()== "" || email.value.trim()== "" || !email.value.includes("@") || pword.value.trim()== "" || !(pword.value.length <= 100) || !(pword.value.length>8)){
		var user=username.parentElement;
		var word_user=user.querySelector("span");
		if(username.value.trim()== "" || username.value.length >=40){
			user.className="form-control error";
			word_user.style.color="#F95437";
			if(username.value.trim()== "" ) word_user.textContent="不可空白";
			else word_user.textContent="字數超過40"
		}else{
			username.parentElement.className="form-control success";
			word_user.textContent="完成";
			word_user.style.display="inline";
			word_user.style.color="#62C427";
		}
		
		var mail=email.parentElement;
		var word_mail=mail.querySelector("span");
		if(email.value.trim()== "" || !email.value.includes("@")){
			console.log("3");
			mail.className="form-control error";
			word_mail.style.color="#F95437";
			if(!email.value.includes("@")) {
				word_mail.textContent="須包含@";
				word_mail.style.display="inline";
				console.log("4");
			}
			else word_mail.textContent="不可空白";
		}else{
			email.parentElement.className="form-control success";
			word_mail.textContent="完成";
			word_mail.style.display="inline";
			word_mail.style.color="#62C427";
		}
		
		var pwd=pword.parentElement;
		var word_pwd=pwd.querySelector("span");
		console.log("length："+pword.value.length)
		if(pword.value.trim()== "" || !(pword.value.length <= 100) || !(pword.value.length>8)){
			pwd.className="form-control error";
			word_pwd.style.color="#F95437";
			if(pword.value.trim()== "") {
				word_pwd.textContent="不可空白";
				word_pwd.style.display="inline";
			}
			else if(!(pword.value.length > 8)) {
				word_pwd.textContent="不得低於8字";
				word_pwd.style.display="inline";
			}
			else{
				word_pwd.textContent="不超過100字";
				word_pwd.style.display="inline";
			}
		}else{
			pword.parentElement.className="form-control success";
			word_pwd.textContent="完成";
			word_pwd.style.display="inline";
			word_pwd.style.color="#62C427";
		}
	}else{
		username.parentElement.className="form-control success";
		email.parentElement.className="form-control success";
		pword.parentElement.className="form-control success";
		
		var spans=document.querySelectorAll("span");
		for(span of spans){
			span.style.display="none";
		}

		console.log("finished");
		toastSuccess();
	}
	

}
function toastSuccess(){
	var x=document.querySelector(".toast-success");
	x.className="toast-success-show";
	setTimeout(function(){
		x.className=x.className.replace("toast-success-show","toast-success");
		document.getElementById("myForm").submit();
	},3000);
	
}