"use strict"
// eventListener

const addBtn = document.querySelector('.addBtn');
const popupWrapper = document.querySelector('.popup-wrapper')
const addMemoDeleteBtn = document.getElementById('addMemo-DeleteBtn')
const footerMenuBtn = document.getElementById('footerBtn1')
const navBar = document.querySelector('nav')

addBtn.addEventListener('click',()=>{
    popupWrapper.classList.remove('hidden',)
    addBtn.classList.add('hidden')

})

addMemoDeleteBtn.addEventListener('click',()=>{
    popupWrapper.classList.add('hidden')
    addBtn.classList.remove('hidden')
})

footerMenuBtn.addEventListener('click',()=>{
    navBar.classList.add
})


// HTTP methods

const showAllButton = document.querySelector('.show-all-button')
// const addButton = document.querySelector('.add-button')
// const delButton = document.querySelector('.delete-btn')
const display = document.querySelector('.memolist')
let taskID = 0;


// asssign background-color with task type 
const taskTypeBgColor = (type) =>{
	if(type === "WORK\r"){
		return 'bg-blue'
	} else if (type === 'FAMILY\r'){
		return 'bg-orange'
	} else if(type === 'PERSONAL\r'){
		return 'bg-green'
	} 
	
}
// get all data 
async function showData() {
	const response = await fetch('http://localhost:8080/todolist')	
	if (response.ok) {
		const dataArr = await response.json()
		for (let i = 0; i < dataArr.length; i++) {
			display.innerHTML +=
				`<div class="memo memo-${dataArr[i].id}" id="${dataArr[i].id}">
    			<div class="memoTopBorder ${taskTypeBgColor(dataArr[i].type)}"></div>
    			<div class="memoTopBar">
        		<p id="${dataArr[i].id}" class="memoType blue">Task-${dataArr[i].id}: ${dataArr[i].name}</p> 
        		<svg class="delete-btn" id="${dataArr[i].id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    			</div>
    
    			<div class="memoContent description">${dataArr[i].description}</div>
    			<div class="memoContent ${dataArr[i].type}">${dataArr[i].type}</div>
    			<div class="memoContent duedate">Due Date:${dataArr[i].duedate}</div>
    			<div class="memoMiniFunction">                     
        		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
        		<svg  class="update-btn" id="${dataArr[i].id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    			</div>    
				</div>`
		}
		const delButton = document.querySelectorAll('.delete-btn')
		for(let item of delButton){
			item.addEventListener('click', (event) =>{
            event.preventDefault();
			delTask(event.target.id);
			
			})
		}
		
		const updateButton = document.querySelectorAll('.update-btn')
		for(let item of updateButton){
			item.addEventListener('click', (event)=>{
				event.preventDefault();
				editTaskById(event.target.id)
				// editTask(event.target.id)
			})
		}
		
	}
}
showAllButton.addEventListener('click', showData)

// show task by ID
async function showTaskById(id){
	let tempArr = {}
	let selectedArr = {}
	const url = 'http://localhost:8080/todolist/'
	const response = await fetch(url)
	if(response.ok){
		tempArr = await response.json()
		for (let item of tempArr){
			if(item.id === id){
				selectedArr = {...item}
				
			}
		}
	}
	let memo = 'memo-'+ selectedArr.id
	let editMemo = document.querySelector(`.${memo}`)
		
	editMemo.outerHTML = `
    <div class="memo memo-${selectedArr.id}" id="${selectedArr.id}">
    <div class="memoTopBorder ${taskTypeBgColor(selectedArr.type)}"></div>
    <div class="memoTopBar">
    <p id="${selectedArr.id}" class="memoType blue">${selectedArr.name}/ Task-${selectedArr.id}</p> 
    <svg class="delete-btn" id="${selectedArr.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    </div>

    <div class="memoContent description">${selectedArr.description}</div>
    <div class="memoContent ${selectedArr.type}">${selectedArr.type}</div>
    <div class="memoContent duedate">Due Date:${selectedArr.duedate}</div>
    <div class="memoMiniFunction">                     
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
    <svg  class="update-btn" id="${selectedArr.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    </div>    
    </div>`
    document.querySelector('.delete-btn').addEventListener('click', (event) =>{
            event.preventDefault();
			delTask(event.target.id);			
			})
		
		
	document.querySelector('.update-btn').addEventListener('click', (event)=>{
				event.preventDefault();
				editTaskById(event.target.id)
				// editTask(event.target.id)
			})
		
}
// add new task
async function addTask(event) {
    const form = event.target	
    let type = form.name.value.toUpperCase()
	const dataObj = {
		id: taskID,
		name: form.name.value,
		description: form.description.value,
		duedate: form.duedate.value,
		type: form.type.value + '\r'
	}

	
	const response = await fetch('http://localhost:8080/todolist', 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataObj)
	})
	if(response.ok){
		
	}
}

document.querySelector('.add-form').addEventListener('submit', event => {
	event.preventDefault();
	addTask(event)
	taskID++
})

// delete task
async function delTask(id){
	const url = 'http://localhost:8080/todolist/' + id
	const response = await fetch(url, {
		method: 'DELETE'
	})
	if(response.ok){
		alert(`Task-${id} was deleted`)
	}

}

// transform task to form by id
async function editTaskById(id){
	let tempArr = {}
	let selectedArr = {}
	const url = 'http://localhost:8080/todolist/'
	const response = await fetch(url)
	if(response.ok){
		tempArr = await response.json()
		for (let item of tempArr){
			if(item.id === id){
				selectedArr = {...item}
				
			}
		}
	}
	let memo = 'memo-'+ selectedArr.id
	let editMemo = document.querySelector(`.${memo}`)
	console.log(editMemo)	
	editMemo.outerHTML = `
		<div class="memo ${memo}" id="${selectedArr.id}">
		<div class="memoTopBorder ${taskTypeBgColor(selectedArr.type)}"></div>
		<form class="update-form-${selectedArr.id}" style="display: flex; flex-direction: column;padding: 10px;" action="http://localhost:8080/todolist" method="POST"> 
		<input type="text" name="name" value="${selectedArr.name}">
		<input type="text" name="description" value="${selectedArr.description}">
		<input type="text" name="duedate" value="${selectedArr.duedate}">
		<input type="text" name="type" value="${selectedArr.type}">
		<input type="text" name="id" value="${selectedArr.id}">
		<input type="submit" class="add-button" value="Send">
		</form>
		</div>`
	// console.log(editMemo.id)
	let updateTarget = document.querySelector(`.update-form-${selectedArr.id}`)
	updateTarget.addEventListener('submit', (event)=>{
		let targetData = {}
		event.preventDefault();		
		targetData.id = event.target.id.value
		targetData.name = event.target.name.value
		targetData.description = event.target.description.value
		targetData.duedate = event.target.duedate.value
		targetData.type = event.target.type.value + '\r'
		updateTask(targetData)
	})

}

// edit task
async function updateTask(dataObj){
    let dataId = dataObj.id
	let memo = 'memo-'+ dataObj.id
	let editMemo = document.querySelector(`.${memo}`)
	const url = 'http://localhost:8080/todolist/' + dataObj.id
	let response = await fetch(url, {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(dataObj)
		
	})
	if(response.ok){
        console.log(dataId)
        /*
		editMemo.outerHTML =
        `<div class="memo memo-${dataArr.id}" id="${dataArr.id}">
        <div class="memoTopBorder ${taskTypeBgColor(dataArr.type)}"></div>
        <div class="memoTopBar">
        <p id="${dataArr.id}" class="memoType blue">${dataArr.name}/ Task-${dataArr.id}</p> 
        <svg class="delete-btn" id="${dataArr.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
        </div>

        <div class="memoContent description">${dataArr.description}</div>
        <div class="memoContent ${dataArr.type}">${dataArr.type}</div>
        <div class="memoContent duedate">Due Date:${dataArr.duedate}</div>
        <div class="memoMiniFunction">                     
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
        <svg  class="update-btn" id="${dataArr.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
        </div>    
        </div>`
        */
        showTaskById(dataId)
        
	}
}

// verify user input for task


// verify user input for log-in page