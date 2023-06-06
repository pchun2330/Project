var todos = [
  {
    title: "倒垃圾",
    category: "normal",
    isCompleted: false
  },
  {
    title: "繳電話費",
    category: "important",
    isCompleted: false
  },
  {
    title: "採買本週食材",
    category: "urgent",
    isCompleted: false
  },
];

function render()
{	
	var root=document.querySelector("#root");
	root.textContent="";
	
	var allist=document.createElement("ul");
	
	for(const x in todos){
		
		var list=document.createElement("li");
		
		var item=document.createElement("span");
		item.textContent=todos[x].title;
		
		var fintext=document.createElement("span");
		
		var togglebtn=document.createElement("button");
		
		if(todos[x].isCompleted){
			fintext.style.display="inline-block";
			togglebtn.textContent="未完成";
			fintext.textContent="(已完成)";
		}else{
			togglebtn.textContent="完成";
			fintext.style.display="none";
		}
		togglebtn.onclick=()=>{
			
			console.log(todos);
			if(!todos[x].isCompleted){
				todos[x].isCompleted=true;
			}else{
				todos[x].isCompleted=false;
			}
			render();
		};
		
		var deletebtn=document.createElement("button");
		deletebtn.textContent="Delete";

		deletebtn.onclick = () => {
			todos.splice(x, 1);
			render();
		};
		
		if(todos[x].category == "normal"){
			item.style.color="black";
		}else if(todos[x].category=="important"){
			item.style.color="#E8A63C";
		}else{
			item.style.color="#E12A18";
		}
		
		allist.append(list);
		list.append(item);
		list.append(fintext);
		list.append(togglebtn);
		list.append(deletebtn);
	}
	
	root.append(allist);
	
}

render();

function add()
{	
	var input=document.querySelector("input");
	var state=document.querySelector("select");
	todos.push({title:input.value,category:state.value,isCompleted:false});
	console.log(todos);
	render();
}

function Export()
{
	var text="";
	var num=1;
	for(var index in todos){
		if(todos[index].category =="normal"){
			text=text+num.toString()+". "+todos[index].title+"\n";
			num++;
		}else if(todos[index].category == "important"){
			text=text+num.toString()+". "+"*"+todos[index].title+"*\n";
			num++;
		}else{
			text=text+num.toString()+". "+"**"+todos[index].title+"**\n";
			num++;
		}
	}
	alert("代辦清單:\n"+text);
	render();
}

if(localStorage.getItem("Datas", JSON.stringify(todos)))
{
	var todos = JSON.parse(localStorage.getItem("Datas"));
	console.log(todos)
	render();
}
function save(){
	localStorage.setItem("Datas", JSON.stringify(todos));
	alert("儲存成功");
	render();
}