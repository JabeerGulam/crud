
const inputBox = document.querySelector('.inputField input'); 
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllBtn = document.querySelector('.footer button')

inputBox.onkeyup = () => {
	let userData = inputBox.value;
	if(userData.trim() != 0) {
		addBtn.classList.add('active');
	}
	else{
		addBtn.classList.remove('active');
	}

}

showTasks();  // para di maig in list misan hi load in page

addBtn.onclick = () => {

	let userData = inputBox.value;
	let getLocalStorage = localStorage.getItem('New Todo');
	if (getLocalStorage == null) {
		 listArr = [];
	}
	else {
		listArr = JSON.parse(getLocalStorage); 
	}

	listArr.push(userData);
	localStorage.setItem('New Todo', JSON.stringify(listArr));
	showTasks();
	addBtn.classList.remove('active');
}

//function to add task list inside the ul
function showTasks(){


	let getLocalStorage = localStorage.getItem('New Todo');

	if (getLocalStorage == null) {
		 listArr = [];
	}
	else {
		listArr = JSON.parse(getLocalStorage); 
	}

	const pendingNumb = document.querySelector('.pendingNumb');
	pendingNumb.textContent = listArr.length;

	if(listArr.length > 0) {
		deleteAllBtn.classList.add('active');
	}
	else {
		deleteAllBtn.classList.remove('active');
	}
	
	let newLiTag = '';
	listArr.forEach((element, index) => {
		newLiTag += `<li> ${element} <span onclick="deleteTask(${index})">&times;</span></li>`;
	});

	todoList.innerHTML =  newLiTag;
	inputBox.value = '';
}

//delete task  function

function deleteTask(index) {
	let getLocalStorage = localStorage.getItem('New Todo');
	listArr = JSON.parse(getLocalStorage); 
	listArr.splice(index, 1);

	localStorage.setItem('New Todo', JSON.stringify(listArr));
	showTasks();
}

deleteAllBtn.onclick = () => {
	listArr = [];
	localStorage.setItem('New Todo', JSON.stringify(listArr));
	showTasks();
}