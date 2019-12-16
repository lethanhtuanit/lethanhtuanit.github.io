function loadData() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://5de10a34bb46ce001434c820.mockapi.io/todo')
	xhr.send()
	var myList = document.getElementById('list');
	myList.innerHTML = '';
	xhr.onload = function() {
	  let responseObj = JSON.parse(xhr.response);
		for(let i =0; responseObj.length; i++) {
			var myChild = document.createElement('li');
			var myBtn = document.createElement('button'); // tao node button
			myBtn.addEventListener('click', function(e) {
				e.stopPropagation();
				clickRemove(e, responseObj[i].id)
			});
			myBtn.innerHTML = 'x';
			myChild.innerHTML = responseObj[i].title; // gan text cho li
			myChild.appendChild(myBtn); // chen button vao li
			myList.appendChild(myChild);
		}
		
	};
}

loadData();
function clickRemove(e, id) {
	const xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'http://5de10a34bb46ce001434c820.mockapi.io/todo/'+id)
	xhr.send()
	xhr.onload = function() {
	  // if (xhr.status == 200) {
	  // 	e.target.closest("li").remove()
	  // }
	  loadData();
	};
}

