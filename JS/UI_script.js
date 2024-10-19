/*
way1:
const btn_close=document.querySelectorAll('.btn-close');
function close(){
	event.target.closest('.alert').remove();
	
}
for(var x of btn_close){
		x.onclick=close;
	}
*/
function btn_close(){
	event.target.parentElement.remove();
}