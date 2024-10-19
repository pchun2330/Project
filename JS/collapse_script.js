/*
Way 1: ===多個就要全部都複製，要幾個就複製幾次並改class===

const collapsible=document.querySelector(".collapsible");
const content=document.querySelector(".content");

collapsible.addEventListener("click",()=>{
	content.classList.toggle("toggle");
});
*/
var coll=document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("toggle");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var dropdown=document.querySelector(".dropdown");
var content=document.querySelector(".dropdown-content");

dropdown.addEventListener("click",function(){
	content.classList.toggle("show");
});

window.addEventListener("click", function(event) {
  if (!event.target.matches(".dropdown label")) {
    content.classList.remove("show");
  }
});

var slide=document.querySelector(".carousel-slide");
var prebtn=document.querySelector(".pre-btn");
var nextbtn=document.querySelector(".next-btn");

var slide_img=slide.querySelectorAll("img").length;

let count=0;

setInterval(()=>{
	if(count >= slide_img-1){
		count=0;
		slide.scrollTo(0,0);
	}else{
		count++;
		slide.scrollBy(500,0);
	}
},5000);

prebtn.addEventListener("click",()=>{
	//if(count <=0) return;
	slide.scrollBy(-500,0);
	//count--;
});

nextbtn.addEventListener("click",()=>{
	//if(count >= slide_img-1) return;
	slide.scrollBy(500,0);
	//count++;
});

/*
Way 2:
=== 淡入 ===

var slide=document.querySelector(".carousel-slide");
var prebtn=document.querySelector(".pre-btn");
var nextbtn=document.querySelector(".next-btn");

var slide_img=slide.querySelectorAll("img");

let count=0;

console.log(slide_img);

slide_img[count].classList.add("active");

setInterval(()=>{
	slide_img[count].classList.remove("active");
	count++;
	if(count >= slide_img.length){
		count=0;
	}
	slide_img[count].classList.add("active");
},2000);

prebtn.addEventListener("click",()=>{
	slide_img[count].classList.remove("active");
	count--;
	if(count < 0){
		count=slide_img.length-1;
	}
	slide_img[count].classList.add("active");
});

nextbtn.addEventListener("click",()=>{
	slide_img[count].classList.remove("active");
	count++;
	if(count >= slide_img.length){
		count=0;
	}
	slide_img[count].classList.add("active");
});
*/