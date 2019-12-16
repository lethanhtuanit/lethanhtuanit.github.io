function loadData() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://5de10a34bb46ce001434c820.mockapi.io/learnmore')
	xhr.send();
	var myList = document.getElementById('list');
	xhr.onload = function() {
		let responseObj = JSON.parse(xhr.response);
		console.log(responseObj)
		for(let i =0; responseObj.length; i++) {
			var myChild = document.createElement('li');
			var myBtn = document.createElement('button');
			myBtn.addEventListener('click', function(e) {
				e.stopPropagation();
				clickRemove(e, responseObj[i].id)
			});
			myBtn.innerHTML= 'x';
			myChild.innerHTML = responseObj[i].name;
			myList.appendChild(myChild);
			myChild.appendChild(myBtn);
		}
	};
}
loadData();
function clickRemove(e, id) {
	const xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'http://5de10a34bb46ce001434c820.mockapi.io/learnmore/'+id)
	xhr.send()
	xhr.onload = function() {
	loadData();
	};
}
