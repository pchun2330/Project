var all_li=document.querySelector("#list");
var thing;
var btn;
var btn_fin;
function addlist(){
	
	thing=document.querySelector("#thing").value;
	//console.log(thing)
	
	var li=document.createElement('li');
	li.classList.add('li_style','radius','input-group');
	//console.log(li);
	
	var done_text=document.createElement('span');
	done_text.textContent="已完成";
	done_text.classList.add("input-group-text");
	done_text.style.display="none";
	
	var spa=document.createElement('span');
	spa.textContent=thing;
	spa.className=spa.className+"spa_style form-control ";
	//console.log(spa);
	
	btn_fin=document.createElement('button');
	btn_fin.textContent="完成";
	btn_fin.classList.add("btn","btn-secondary");
	btn_fin.onclick=btn_finished;
	
	var state=document.querySelector('#state');
	
	btn=document.createElement('button');
	btn.textContent="X";
	btn.onclick=btn_del;
	//console.log(btn);
	
	
	if(state.selectedIndex == 0){
		spa.className=spa.className+"text-dark";
		btn.className=btn.className+"btn btn-light";
		//console.log("index="+state.selectedIndex+":"+state.value);
	}
	else if(state.selectedIndex == 1){
		spa.className=spa.className+"text-danger";
		btn.className=btn.className+"btn btn-danger";
		//console.log(spa.className+",index="+state.selectedIndex+":"+state.value);
		//output.onclick=output(index);
	}
	else{
		spa.className=spa.className+"text-success";
		btn.className=btn.className+"btn btn-success";
		//console.log(spa.className+",index="+state.selectedIndex+":"+state.value);
		//output.onclick=output(index);
	}
	
	//console.log(all_li);
	
	all_li.append(li);
	li.append(done_text);
	li.append(spa);
	li.append(btn_fin);
	li.append(btn);
	
	
}
function btn_del(){
	event.target.closest('li').remove();
}
function output(){
	var output_list=document.querySelectorAll('#list li');
	//console.log("output:"+output_list);
	var num=1;
	var text="";
	
	for(var x of output_list){
		//console.log(x);
		//console.log("x="+x.children[0].textContent);
		var getbtn = x.querySelector(".spa_style");
		console.log(getbtn);
		
		if(getbtn.className.includes("text-danger")){ 
			text=text+num.toString()+". **" + getbtn.textContent+"**\n";
			num++;
			console.log("if:"+getbtn.className);
		}
		else if(getbtn.className.includes("text-success")){
			text=text+num.toString()+". *" + getbtn.textContent+"*\n";
			console.log("else if:"+getbtn.className);
			num++;			
		}
		else{
			text=text+num.toString()+". "+ getbtn.textContent+"\n";
			console.log("else:"+getbtn.className);
			num++;
		}
	}
	alert("代辦清單:\n"+text);
	
	var text2="";
	var num2=1;
	for(var x of output_list){
		var getbtn = x.querySelector(".spa_style");
	
		if(getbtn.className.includes("text-danger")){ 
			text2=text2+num2.toString()+". " + getbtn.textContent+"\n";
			num2++;
			//console.log("if:"+x.children[1].className);
		}
	}
	alert(" *** 重要事項 ***\n"+text2);
	
	var text3="";
	var num3=1;
	for(var x of output_list){
		var getbtn = x.querySelector(".spa_style");
		if(getbtn.className.includes("text-success")){ 
			text3=text3+num3.toString()+". " + getbtn.textContent+"\n";
			num3++;
			//console.log("if:"+x.children[1].className);
		}
	}
	alert(" !! 緊急事項 !!\n"+text3);
}
function show(){
	
	thing=document.querySelector("#thing");
	
	if(event.target.selectedIndex ==0){
		if(thing.className.includes("border-danger","text-danger") || thing.className.includes("border-success","text-success")){
			thing.classList.remove("border-danger","text-danger","border-success","text-success");
			console.log("remove");
		}
		thing.classList.add("border-dark","text-dark");
		console.log(event.target.selectedIndex+": "+thing.className);
	}
	else if(event.target.selectedIndex ==1){
		if(thing.className.includes("border-dark","text-dark") || thing.className.includes("border-success","text-success")){
			thing.classList.remove("border-dark","text-dark","border-success","text-success");
			console.log("remove");
		}
		thing.classList.add("border-danger","text-danger");
		console.log(event.target.selectedIndex+": "+thing.className);
	}
	else{
		if(thing.className.includes("border-dark","text-dark") || thing.className.includes("border-danger","text-danger")){
			thing.classList.remove("border-dark","text-dark","border-danger","text-danger");
			console.log("remove");
		}
		thing.classList.add("border-success","text-success");
		console.log(event.target.selectedIndex+": "+thing.className);
	}
}
function btn_finished(){
	//var done_text=event.target.parentElement.children[0];
	//var btn_fin = event.target.parentElement.children[2];
	var done_text=event.target.closest('li').querySelector('.input-group-text');
	var btn_fin=event.target.closest('li').querySelector('.btn-secondary');
	
	console.log(done_text);
	if(done_text.style.display =="none"){
		btn_fin.textContent = "未完成";
		done_text.style.display="block";
	}
	else{
		btn_fin.textContent = "完成";
		done_text.style.display="none";
	}
}

if (localStorage.getItem("savedata")) {
  var savedata = JSON.parse(localStorage.getItem("savedata"));
  console.log(savedata.length)
 
  for(var y=0; y<savedata.length ; y++){
	var li=document.createElement('li');
	var done_text=document.createElement('span');
	var spa=document.createElement('span');
	var finbtn=document.createElement('button');
	var btn=document.createElement('button');
	btn.textContent="X";
	
	all_li.append(li);
	li.className=savedata[y].listyle;
	li.append(done_text);
	done_text.style.display=savedata[y].textstate;
	done_text.className=savedata[y].textstyle;
	done_text.textContent="已完成";
	
	li.append(spa);
	spa.textContent=savedata[y].spa;
	spa.className=savedata[y].spastyle;
	
	li.append(finbtn);
	finbtn.textContent=savedata[y].finbtn;
	finbtn.className=savedata[y].finbtnstyle;
	finbtn.onclick=btn_finished;
	
	li.append(btn)
	btn.className=savedata[y].btnstyle;
	btn.onclick=btn_del;
  }
	
}

function save()
{
	var savelist = document.querySelectorAll('#list li');
	var savedata=[];
	for(var item of savelist){
		var listyle=item.className;
		var textstate=item.children[0].style.display;
		var textstyle=item.children[0].className;
		var spa=item.children[1].textContent;
		var spastyle=item.children[1].className;
		var finbtn=item.children[2].textContent;
		var finbtnstyle=item.children[2].className;
		var btnstyle=item.children[3].className;
		
		var lists={
			listyle:listyle,
			textstate:textstate,
			textstyle:textstyle,
			spa:spa,
			spastyle:spastyle,
			finbtn:finbtn,
			finbtnstyle:finbtnstyle,
			btnstyle:btnstyle,
		}
		savedata.push(lists);
		console.log(savedata);
	}


  localStorage.setItem("savedata", JSON.stringify(savedata));

  //alert('saved');
}
/*
use getElementById、children、parentElement

var all_li=document.getElementById("list");
var thing;
var btn;
var btn_fin;
function addlist(){
	
	thing=document.getElementById("thing").value;
	//console.log(thing)
	
	var li=document.createElement('li');
	li.classList.add('li_style','radius','input-group');
	//console.log(li);
	
	var done_text=document.createElement('span');
	done_text.textContent="已完成";
	done_text.classList.add("input-group-text");
	done_text.style.display="none";
	
	var spa=document.createElement('span');
	spa.textContent=thing;
	spa.className=spa.className+"spa_style form-control ";
	//console.log(spa);
	
	btn_fin=document.createElement('button');
	btn_fin.textContent="完成";
	btn_fin.classList.add("btn","btn-secondary");
	btn_fin.onclick=btn_finished;
	
	var state=document.getElementById('state');
	
	btn=document.createElement('button');
	btn.textContent="X";
	btn.onclick=btn_del;
	//console.log(btn);
	
	
	if(state.selectedIndex == 0){
		btn.className=btn.className+"btn btn-light";
		console.log("index="+state.selectedIndex+":"+state.value);
	}
	else if(state.selectedIndex == 1){
		spa.className=spa.className+"text-danger";
		btn.className=btn.className+"btn btn-danger";
		//console.log(spa.className+",index="+state.selectedIndex+":"+state.value);
		index=1;
		//output.onclick=output(index);
	}
	else{
		spa.className=spa.className+"text-success";
		btn.className=btn.className+"btn btn-success";
		//console.log(spa.className+",index="+state.selectedIndex+":"+state.value);
		index=2;
		//output.onclick=output(index);
	}
	
	
	all_li.append(li);
	li.append(done_text);
	li.append(spa);
	li.append(btn_fin);
	li.append(btn);
	
	//console.log(all_li);
}
function btn_del(){
	event.target.parentElement.remove();
}
function output(){
	var output_list=document.getElementById('list').children;
	//console.log("output:"+output_list);
	var num=1;
	var text="";
	
	for(var x of output_list){
		//console.log(x);
		//console.log("x="+x.children[0].textContent);
	
		if(x.children[3].className.includes("btn-danger")){ 
			text=text+num.toString()+". **" + x.children[1].textContent+"**\n";
			num++;
			console.log("if:"+x.children[3].className);
		}
		else if(x.children[3].className.includes("btn-success")){
			text=text+num.toString()+". *" + x.children[1].textContent+"*\n";
			console.log("else if:"+x.children[3].className);
			num++;			
		}
		else{
			text=text+num.toString()+". "+ x.children[1].textContent+"\n";
			console.log("else:"+x.children[3].className);
			num++;
		}
	}
	alert("代辦清單:\n"+text);
	
	text2="";
	var num2=1;
	for(var x of output_list){
		if(x.children[3].className.includes("btn-danger")){ 
			text2=text2+num2.toString()+". " + x.children[1].textContent+"\n";
			num2++;
			//console.log("if:"+x.children[1].className);
		}
	}
	alert(" *** 重要事項 ***\n"+text2);
	
	text3="";
	var num3=1;
	for(var x of output_list){
		if(x.children[3].className.includes("btn-success")){ 
			text3=text3+num3.toString()+". " + x.children[1].textContent+"\n";
			num3++;
			//console.log("if:"+x.children[1].className);
		}
	}
	alert(" !! 緊急事項 !!\n"+text3);
}
function show(){
	
	thing=document.getElementById("thing");
	
	if(event.target.selectedIndex ==0){
		if(thing.className.includes("border-danger","text-danger") || thing.className.includes("border-success","text-success")){
			thing.classList.remove("border-danger","text-danger","border-success","text-success");
			console.log("remove");
		}
		thing.classList.add("border-dark","text-dark");
		console.log(event.target.selectedIndex+": "+thing.className);
	}
	else if(event.target.selectedIndex ==1){
		if(thing.className.includes("border-dark","text-dark") || thing.className.includes("border-success","text-success")){
			thing.classList.remove("border-dark","text-dark","border-success","text-success");
			console.log("remove");
		}
		thing.classList.add("border-danger","text-danger");
		console.log(event.target.selectedIndex+": "+thing.className);
	}
	else{
		if(thing.className.includes("border-dark","text-dark") || thing.className.includes("border-danger","text-danger")){
			thing.classList.remove("border-dark","text-dark","border-danger","text-danger");
			console.log("remove");
		}
		thing.classList.add("border-success","text-success");
		console.log(event.target.selectedIndex+": "+thing.className);
	}
}
function btn_finished(){
	var done_text=event.target.parentElement.children[0];
	var btn_fin = event.target.parentElement.children[2];
	
	console.log(done_text);
	if(done_text.style.display =="none"){
		btn_fin.textContent = "未完成";
		done_text.style.display="block";
	}
	else{
		btn_fin.textContent = "完成";
		done_text.style.display="none";
	}
}
*/