function toastSuccess(){
	var x=document.querySelector(".toast-success");
	x.className="toast-success-show";
	setTimeout(function(){
		x.className=x.className.replace("toast-success-show","toast-success");
	},5000);
}

function toastError(){
	var x=document.querySelector(".toast-error");
	x.className = "toast-error-show";
	setTimeout(function(){
		x.className=x.className.replace("toast-error-show","toast-error");
	},5000);
}