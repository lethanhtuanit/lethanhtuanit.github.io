function toggleclass(e){
	e.target.classList.toggle('stroke-text')
}

function clickRemove(e) {
	e.stopPropagation();
	e.target.parentElement.remove();
}

function myClick(e) {
	e.preventDefault();
	var myText = document.getElementById('mytext');
	var myList = document.getElementById('list');
	var myChild = document.createElement('li');
	var myBtn = document.createElement('button'); // tao node button
	myBtn.addEventListener('click', clickRemove);
	myBtn.innerHTML = 'x'; // gan text button la x
	myChild.innerHTML = myText.value; // gan text cho li
	myChild.appendChild(myBtn); // chen button vao li
	myChild.addEventListener('click', toggleclass);
	myList.appendChild(myChild);
	myText.value = "";

}

