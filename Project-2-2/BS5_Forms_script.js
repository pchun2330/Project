function fun(){
	
	var str=document.getElementById('keyword').value;
	
	var gender_menu=document.getElementById("gender");
	var gender_text = gender_menu.options[gender_menu.selectedIndex].text;
	
	var type_menu=document.getElementById("types");
	var type_text=type_menu.options[type_menu.selectedIndex].text;
	
	var amount_value=document.getElementById("amount").value;
	console.log(amount_value);
	if (str.trim()=="")
		return alert('請輸入姓名');
	if(gender_menu.selectedIndex==0)
		return alert('請選擇分類');
	if(type_menu.selectedIndex==0)
		return alert('請選擇類型');
	
	if(amount_value.trim()==""){
		return alert('請輸入數量');
	}
	else{
		if(amount_value < 100){

			alert('抱歉，我們工廠的最低出貨量是 100 件。');
		}
		else if(amount_value > 5000){
			
			alert('抱歉，我們工廠的最高出貨量是 5,000 件。');
		}
		else{
			alert(str+" 歡迎光臨~~謝謝您對我們的衣服有興趣! 請致電 0987-654-321，會有專人提供您報價！");
	
			var price_text=0;
			
			if (gender_menu.selectedIndex==1){
				price_text=parseInt(amount_value)*600;
				alert('最近剛好是工廠週年慶，只要您今天來電下單「'+gender_text+'」，我們將贈送您帥氣領帶！');
			}
			else{
				price_text=parseInt(amount_value)*500;
				alert('最近剛好是工廠週年慶，只要您今天來電下單 「'+gender_text+'」，我們將贈送您美麗圍巾！');
			}
			document.getElementById('info_msg').textContent = '下單完成!';
			document.getElementById('info_line').textContent = '-----------------------';
			document.getElementById('info').textContent = '訂單資訊';
			document.getElementById('info_name').textContent = '顧客姓名: '+str;
			
			document.getElementById('gender_text').textContent = '服裝分類: '+gender_text;
			document.getElementById('type_text').textContent='服裝類型: '+type_text;
			
			document.getElementById('amount_text').textContent = '訂購數量: '+amount_value;
			document.getElementById('price_text').textContent='初步估價: '+price_text;
		}
	}
	
	

}
function fun2(){
	alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}
function fun3(){
	var gender_menu=document.getElementById("gender");
	var gender_text = gender_menu.options[gender_menu.selectedIndex].text;
	
	if(gender_menu.selectedIndex==1){
		document.getElementById("amount_type").textContent=gender_text+"一件600元";
	}
	if(gender_menu.selectedIndex==2){
		document.getElementById("amount_type").textContent=gender_text+"一件500元";
	}
}
function fun4(target){
	
	if(amount_value < 100 && amount_value > 5000){
		alert('<100');
		
		
	}
	
}