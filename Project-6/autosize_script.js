autosize(document.querySelector("textarea"));

var lazyLoadInstance = new LazyLoad({

});
lazyLoadInstance.update();

const allctx = document.getElementById('myChart-all');

new Chart(allctx, {
	data: {
	datasets: [{
		type: 'bar',
		label: '首次生產婦女之平均年齡',
		data: [32, 33.36, 30.94, 31.12,30.94, 31.31, 31.21,29.38,29.37,30.98],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(150, 3, 20, 0.2)',
			'rgba(10, 170, 30, 0.2)',
			'rgba(200, 200, 200, 0.2)',
			'rgba(75, 192, 244, 0.2)'
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(150, 3, 20, 1)',
			'rgba(10, 170, 30, 1)',
			'rgba(200, 200, 200, 1)',
			'rgba(75, 192, 244, 1)'
		],
	}, {
		type: 'line',
		label: '人口平均所得(萬)',
		data: [63.7, 86.3, 67.7, 59.1, 61.3, 61.9,53.5, 55.2, 57.1,62.1],
		backgroundColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)',
			'rgba(150, 3, 20, 1)',
			'rgba(10, 170, 30, 1)',
			'rgba(200, 200, 200, 1)',
			'rgba(75, 192, 244, 1)'
		],
	},],
	labels: ['新北市', '臺北市', '桃園市', '臺中市', '臺南市', '高雄市','屏東縣','臺東縣','花蓮縣','基隆市'],

	},
	options: {
		scales: {
			y: {
			  beginAtZero: true
			}
		}
	}
});

const ctx = document.getElementById('myChart');

new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['新北市', '臺北市', '桃園市', '臺中市', '臺南市', '高雄市','屏東縣','臺東縣','花蓮縣','基隆市'],
		datasets: [{
			label: '年齡',
			data: [32, 33.36, 30.94, 31.12,30.94, 31.31, 31.21,29.38,29.37,30.98],
			borderWidth: 1,
			backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(150, 3, 20, 0.2)',
					'rgba(10, 170, 30, 0.2)',
					'rgba(200, 200, 200, 0.2)',
					'rgba(75, 192, 244, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(150, 3, 20, 1)',
					'rgba(10, 170, 30, 1)',
					'rgba(200, 200, 200, 1)',
					'rgba(75, 192, 244, 1)'
				],
		}]
		},
		options: {
			scales: {
				y: {
				  beginAtZero: true
			}
		}
	}
});


const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
	type: 'line',
	data: {
		labels: ['新北市', '臺北市', '桃園市', '臺中市', '臺南市', '高雄市','屏東縣','臺東縣','花蓮縣','基隆市'],
		datasets: [{
			label: '平均所得(萬)',
			data: [63.7, 86.3, 67.7, 59.1, 61.3, 61.9,53.5, 55.2, 57.1,62.1],
			borderWidth: 1,
			backgroundColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)',
				'rgba(150, 3, 20, 1)',
				'rgba(10, 170, 30, 1)',
				'rgba(200, 200, 200, 1)',
				'rgba(75, 192, 244, 1)'
			],
		}]
	},
	options: {
		scales: {
			y: {
			  beginAtZero: true
			}
		}
	}
});

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
	type: 'doughnut',
	data: {
		labels: ['新北市', '臺北市', '桃園市', '臺中市', '臺南市', '高雄市','屏東縣','臺東縣','花蓮縣','基隆市'],
		datasets: [{
			label: '人口',
			data: [4008113, 2524393, 2272391, 2813490, 1862059, 2744691, 804440, 213386, 321358, 363977],
			borderWidth: 1,
			backgroundColor: [
				'rgba(255, 99, 132, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(255, 206, 86, 0.5)',
				'rgba(75, 192, 192, 0.5)',
				'rgba(153, 102, 255, 0.5)',
				'rgba(255, 159, 64, 0.5)',
				'rgba(150, 3, 20, 0.5)',
				'rgba(10, 170, 30, 0.5)',
				'rgba(200, 200, 200, 0.5)',
				'rgba(75, 192, 244, 0.5)'
			],
		}]
	},
});

const ctx4 = document.getElementById('myChart4');

new Chart(ctx4, {
	type: 'doughnut',
	data: {
		labels: ['新北市', '臺北市', '桃園市', '臺中市', '臺南市', '高雄市','屏東縣','臺東縣','花蓮縣','基隆市'],
		datasets: [{
			label: '人口',
			data: [4008113, 2524393, 2272391, 2813490, 1862059, 2744691, 804440, 213386, 321358, 363977],
			borderWidth: 1,
			backgroundColor: [
				'rgba(255, 99, 132, 0.5)',
				'rgba(54, 162, 235, 0.5)',
				'rgba(255, 206, 86, 0.5)',
				'rgba(75, 192, 192, 0.5)',
				'rgba(153, 102, 255, 0.5)',
				'rgba(255, 159, 64, 0.5)',
				'rgba(150, 3, 20, 0.5)',
				'rgba(10, 170, 30, 0.5)',
				'rgba(200, 200, 200, 0.5)',
				'rgba(75, 192, 244, 0.5)'
			],
		}]
	},
});


const btn=document.querySelector("#btnfin");
$('#check-in').datetimepicker({
	timepicker:false,
	inline:true,
});
$('#check-out').datetimepicker({
	timepicker:false,
	inline:true,
});
btn.onclick=function(){
	var checkin = new Date($('#check-in').val());
	var checkindate = checkin.getFullYear() + '-' + (checkin.getMonth() + 1) + '-' + checkin.getDate();
	var checkout = new Date($('#check-out').val());
	var checkoutdate = checkout.getFullYear() + '-' + (checkout.getMonth() + 1) + '-' + checkout.getDate();
	
	if(checkindate == "NaN-NaN-NaN" || checkoutdate == "NaN-NaN-NaN"){
		alert("請選擇日期");
	}else{
		alert("入住時間: " + checkindate+"\n"+"退房時間: " + checkoutdate);
	}
}

$('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay:true,
  autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/*TinyMCE*/
const emailBodyConfig = {
  selector: '.tinymce-body',
  menubar: false,
  inline: true,
  plugins: [
    'link', 'lists', 'powerpaste',
    'autolink', 'tinymcespellchecker'
  ],
  toolbar: [
    'undo redo | bold italic underline | fontfamily fontsize',
    'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
  ],
  valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
  valid_styles: {
    '*': 'font-size,font-family,color,text-decoration,text-align'
  },
  powerpaste_word_import: 'clean',
  powerpaste_html_import: 'clean',
};
tinymce.init(emailBodyConfig);

var btnsubmit=document.querySelector("#btnpost");
var postcontainer=document.querySelector(".postbox");

btnsubmit.addEventListener('click', () => {
  const content = tinymce.activeEditor.getContent({format: 'text'});
  var postcontent=document.createElement("div");
  postcontent.className="postbox-content";
  postcontent.textContent=content;
  postcontainer.append(postcontent);
});

/*BS5*/
var username=document.querySelector("#username");
var email=document.querySelector("#email");
var pword=document.querySelector("#pword");


var btn_create=document.querySelector("#create");

btn_create.onclick=function(){

	if(username.value.trim()== "" || email.value.trim()== "" || !email.value.includes("@") || pword.value.trim()== "" || !(pword.value.length <= 100) || !(pword.value.length>8)){
		var user=username.parentElement;
		var word_user=user.querySelector("span");
		if(username.value.trim()== "" || username.value.length >=40){
			user.className="formctrl error";
			word_user.style.color="#F95437";
			if(username.value.trim()== "" ) word_user.textContent="不可空白";
			else word_user.textContent="字數超過40"
		}else{
			username.parentElement.className="formctrl success";
			word_user.textContent="完成";
			word_user.style.display="inline";
			word_user.style.color="#62C427";
		}
		
		var mail=email.parentElement;
		var word_mail=mail.querySelector("span");
		if(email.value.trim()== "" || !email.value.includes("@")){
			console.log("3");
			mail.className="formctrl error";
			word_mail.style.color="#F95437";
			if(!email.value.includes("@")) {
				word_mail.textContent="須包含@";
				word_mail.style.display="inline";
				console.log("4");
			}
			else word_mail.textContent="不可空白";
		}else{
			email.parentElement.className="formctrl success";
			word_mail.textContent="完成";
			word_mail.style.display="inline";
			word_mail.style.color="#62C427";
		}
		
		var pwd=pword.parentElement;
		var word_pwd=pwd.querySelector("span");
		console.log("length："+pword.value.length)
		if(pword.value.trim()== "" || !(pword.value.length <= 100) || !(pword.value.length>8)){
			pwd.className="formctrl error";
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
			pword.parentElement.className="formctrl success";
			word_pwd.textContent="完成";
			word_pwd.style.display="inline";
			word_pwd.style.color="#62C427";
		}
	}else{
		username.parentElement.className="formctrl success";
		email.parentElement.className="formctrl success";
		pword.parentElement.className="formctrl success";
		
		var spans=document.querySelectorAll("#register-modal span");
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
		document.getElementById("myForm").reset();
		register_modal.style.display = "none";
		username.parentElement.className="formctrl";
		email.parentElement.className="formctrl";
		pword.parentElement.className="formctrl";
	},3000);
	
}

var register_modal=document.querySelector("#register-modal");
var post_modal=document.querySelector("#post-modal");

var btn_close=document.querySelector(".btnclose");
btn_close.onclick=function(){
	register_modal.style.display = "none";
	document.getElementById("myForm").reset();
	register_modal.style.display = "none";
	username.parentElement.className="formctrl";
	email.parentElement.className="formctrl";
	pword.parentElement.className="formctrl";
	
	var word_pwd=pword.parentElement.querySelector("span");
	var word_mail=email.parentElement.querySelector("span");
	var word_user=username.parentElement.querySelector("span");
	word_pwd.textContent="";
	word_mail.textContent="";
	word_user.textContent="";
}

function registerModal() {
	register_modal.style.display = "block";
}

function postModal(){
	post_modal.style.display = "block";
}
var span=document.getElementsByClassName("postclose")[0];

span.onclick=function(){
	post_modal.style.display = "none";
}