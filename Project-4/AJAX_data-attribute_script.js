var btnloading = document.querySelector("#loading");
var allist = document.querySelector("#allist");
var btnclose = document.querySelector("#btnclose");

function showdetail(list) {
	console.log(list.dataset.title);
	console.log(list.dataset.category);
	console.log(list.dataset.description);
	console.log(list.dataset.image);

	var showmodal = document.querySelector(".modal-mask");
	showmodal.style.display = "block";

	const item = document.querySelector(".modal");
	item.querySelector("h2").textContent = list.dataset.title;
	item.querySelector(".category").textContent = list.dataset.category;
	item.querySelector(".description").textContent = list.dataset.description;
	item.querySelector("img").src=list.dataset.image;
	item.querySelector(".price").textContent="$"+list.dataset.price;
	
	btnclose.onclick = function () {
		showmodal.style.display = "none";
	};
}

function Delete(li, id) {
	console.log("Delete");
	console.log("li=" + li);
	console.log("id=" + id);
	const target = event.target;
	fetch(`https://fakestoreapi.com/products/${id}`, {
		method: "DELETE",
	})
		.then((res) => res.json())
		.then((json) => {
			target.closest("li").remove();
			console.log(json);
			console.log(li);
		})
		.catch((error) => {
			alert("刪除失敗，請稍後再試");
		});
}

function Loading() {
	req1 = fetch("https://fakestoreapi.com/products")
	req2 = req1.then((res) => res.json())
	req3 = req2.then((json) => {
		for (const data of json) {
			
			var li = document.createElement("li");
			var name = document.createElement("span");
			var btndetail = document.createElement("button");
			btndetail.textContent = "Details";
			btndetail.onclick = function () {
				const lists = event.target.closest("li");
				showdetail(lists);
			};
			var btndelete = document.createElement("button");
			btndelete.textContent = "Delete";
			btndelete.onclick = function () {
				Delete(li, data.id);
			};

			allist.append(li);
			li.className = "box";
			li.dataset.title = data.title;
			li.dataset.category = data.category;
			li.dataset.description = data.description;
			li.dataset.image = data.image;
			li.dataset.price = data.price;

			name.textContent = data.title;
			name.className = "name";
			li.append(name);
			li.append(btndetail);
			li.append(btndelete);
		}
		console.log(json);
	});
	req3.catch((error) => {
		alert("抱歉，系統出現錯誤，請稍後重新嘗試。若持續出錯，請聯絡客服信箱");
	});
}
btnloading.onclick = Loading;
