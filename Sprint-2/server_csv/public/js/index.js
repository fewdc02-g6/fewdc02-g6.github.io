"use strict"

// eventListener
window.addEventListener('load', showData)
const addBtn = document.querySelector('.addBtn');
const popupWrapper = document.querySelector('.popup-wrapper')
const popupUpdateArea = document.querySelector('.popup-update-area')
const addMemoDeleteBtn = document.getElementById('addMemo-DeleteBtn')
const footerMenuBtn = document.getElementById('footerBtn1')
const navBar = document.querySelector('nav')
const typeWork = document.querySelector('#navItem2')
const typeFamily = document.querySelector('#navItem3')
const typePersonal = document.querySelector('#navItem4')

typeWork.addEventListener('click', () => {
	showTypeData('work')
})
typeFamily.addEventListener('click', () => {
	showTypeData('family')
})
typePersonal.addEventListener('click', () => {
	showTypeData('personal')
})

addBtn.addEventListener('click', () => {
	popupWrapper.classList.remove('hidden')
	addBtn.classList.add('hidden')

})

addMemoDeleteBtn.addEventListener('click', () => {
	popupWrapper.classList.add('hidden')
	addBtn.classList.remove('hidden')
})

footerMenuBtn.addEventListener('click', () => {
	navBar.classList.add
})

// HTTP methods

const showAllButton = document.querySelector('.show-all-button')
// const addButton = document.querySelector('.add-button')
// const delButton = document.querySelector('.delete-btn')
const display = document.querySelector('.memolist')
let taskID = 1;


// get all data 
async function showData() {
	display.innerHTML = "<br>"
	const response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		const dataArr = await response.json()
		for (let i = 0; i < dataArr.length; i++) {
			// console.log(dataArr[i].type)
			display.innerHTML +=
				`<div class="memo memo-${dataArr[i].id}" id="${dataArr[i].id}">
    			<div class="memoTopBorder ${(dataArr[i].type)} ${dataArr[i].type}"></div>
    			<div class="memoTopBar">
        		<p id="${dataArr[i].id}" class="memoType blue">Task-${dataArr[i].id}: ${dataArr[i].name}</p> 
        		<svg class="delete-btn" id="${dataArr[i].id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    			</div>
    
    			<div class="memoContent description">${dataArr[i].description}</div>
    			<div class="memoContent">${dataArr[i].type}</div>
    			<div class="memoContent duedate">Due Date:${dataArr[i].duedate}</div>
    			<div class="memoMiniFunction">                     
        		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
        		<svg  class="update-btn" id="${dataArr[i].id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    			</div>    
				</div>`
		}
		const delButton = document.querySelectorAll('.delete-btn')
		for (let item of delButton) {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				delTask(event.target.id);

			})
		}

		const updateButton = document.querySelectorAll('.update-btn')
		for (let item of updateButton) {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				popupUpdateArea.classList.remove('hidden')
				addBtn.classList.add('hidden')
				// console.log(event.target)
				// console.log(event.target.id)
				editTaskById(event.target.id)

			})
		}

	}
}
showAllButton.addEventListener('click', showData)

// show task by ID
async function showTaskById(id) {
	let tempArr = {}
	let selectedArr = {}
	const url = 'http://localhost:8080/todolist/'
	const response = await fetch(url)
	if (response.ok) {
		tempArr = await response.json()
		for (let item of tempArr) {
			if (item.id === id) {
				selectedArr = { ...item }

			}
		}
	}
	let memo = 'memo-' + selectedArr.id
	let editMemo = document.querySelector(`.${memo}`)

	editMemo.outerHTML = `
    <div class="memo memo-${selectedArr.id}" id="${selectedArr.id}">
    <div class="memoTopBorder ${(selectedArr.type)}"></div>
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
	document.querySelector('.delete-btn').addEventListener('click', (event) => {
		event.preventDefault();
		delTask(event.target.id);
	})


	document.querySelector('.update-btn').addEventListener('click', (event) => {
		event.preventDefault();
		popupWrapper.classList.remove('hidden')
		editTaskById(event.target.id)
		// editTask(event.target.id)
	})

}

// show task by type
async function showTypeData(taskType) {
	display.innerHTML = "<br>"
	// console.log(type)

	const response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		const dataArr = await response.json()
		// console.log(dataArr)
		for (let obj of dataArr) {
			if (taskType === obj.type){
				console.log(obj)
				display.innerHTML +=
				`<div class="memo memo-${obj.id}" id="${obj.id}">
    			<div class="memoTopBorder ${(obj.type)} ${obj.type}"></div>
    			<div class="memoTopBar">
        		<p id="${obj.id}" class="memoType blue">Task-${obj.id}: ${obj.name}</p> 
        		<svg class="delete-btn" id="${obj.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    			</div>
    
    			<div class="memoContent description">${obj.description}</div>
    			<div class="memoContent">${obj.type}</div>
    			<div class="memoContent duedate">Due Date:${obj.duedate}</div>
    			<div class="memoMiniFunction">                     
        		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
        		<svg  class="update-btn" id="${obj.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    			</div>    
				</div>`
			}
		}
		const delButton = document.querySelectorAll('.delete-btn')
		for (let item of delButton) {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				delTask(event.target.id);

			})
		}

		const updateButton = document.querySelectorAll('.update-btn')
		for (let item of updateButton) {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				popupUpdateArea.classList.remove('hidden')
				addBtn.classList.add('hidden')
				// console.log(event.target)
				// console.log(event.target.id)
				editTaskById(event.target.id)

			})
		}

	}
}


// add new task
async function addTask(event) {
	const form = event.target
	let type = form.type.value
	const dataObj = {
		id: taskID,
		name: form.name.value,
		description: form.description.value,
		duedate: form.duedate.value,
		type: form.type.value
	}


	const response = await fetch('http://localhost:8080/todolist',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataObj)
		})
	if (response.ok) {
		console.log('success')
		alert('haha')
		popupWrapper.classList.add('hidden')
		addBtn.classList.remove('hidden')
		showData()
	}

}

document.querySelector('.add-form').addEventListener('submit', event => {
	event.preventDefault();
	addTask(event)
	taskID++
})

// delete task
async function delTask(id) {
	const url = 'http://localhost:8080/todolist/' + id
	const response = await fetch(url, {
		method: 'DELETE'
	})
	if (response.ok) {
		alert(`Task-${id} was deleted`)
	}

}

// transform task to form by id
async function editTaskById(id) {
	// console.log(id)
	let tempArr = {}
	let selectedArr = {}
	const url = 'http://localhost:8080/todolist/'
	const response = await fetch(url)
	if (response.ok) {
		tempArr = await response.json()
		for (let item of tempArr) {
			if (item.id === id) {
				selectedArr = { ...item }

			}
		}
	}
	// console.log(selectedArr)
	let addClassType = 'type-' + selectedArr.type
	console.log(selectedArr.description)

	popupUpdateArea.innerHTML =
		`<div class="addMemo">
                <form class="update-form">
                    <form action="http://localhost:8080/" method="PUT"> 
                        <svg  id='popup-memo-close-button' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                       
                        <div>
                            <label for="type">Type</label>        
                            <select id="type" name ="type" required>
                                <option value="family" class="type-family">Family</option>
                                <option value="work" class="type-work">Work</option>
                                <option value="personal" class="type-personal">Personal</option>
                            </select>  <br>
                        </div>
                        <div>
                            <label for="name">Memo Title</label>                                       
                            <input id="name" name="name" type="text" value="${selectedArr.name}" required>  
                            <br>               
                        </div>
                        <div>
                            <label for="duedate">Due Date</label>                                       
                            <input id="duedate" name="duedate" type="text" value="${selectedArr.duedate}" required><br>                
                        </div>                       
                        <input type="text" name="id" value="${selectedArr.id}" required hidden>          
                       <label for="message"></label>
                       <textarea id="description" name="description" rows="8" cols="40" required>${selectedArr.description}</textarea>                
                        <input id="update-btn" type="submit" value="Update">
                
                    </form>
                </form>
            </div> `
	document.querySelector(`.${addClassType}`).setAttribute('selected', 'selected')
	document.querySelector('#popup-memo-close-button').addEventListener('click', () => {
		popupUpdateArea.classList.add('hidden')
		addBtn.classList.remove('hidden')
	})
	document.querySelector('#update-btn').addEventListener('click', () => {
		popupUpdateArea.classList.add('hidden')
		addBtn.classList.remove('hidden')
	})
	let updateTarget = document.querySelector(`.update-form`)
	updateTarget.addEventListener('submit', (event) => {
		let targetData = {}
		event.preventDefault();
		targetData.id = event.target.id.value
		targetData.name = event.target.name.value
		targetData.description = event.target.description.value
		targetData.duedate = event.target.duedate.value
		targetData.type = event.target.type.value
		updateTask(targetData)
	})

}

// edit task
async function updateTask(dataObj) {
	let dataId = dataObj.id
	let memo = 'memo-' + dataObj.id
	let editMemo = document.querySelector(`.${memo}`)
	const url = 'http://localhost:8080/todolist/' + dataObj.id
	let response = await fetch(url, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(dataObj)

	})
	if (response.ok) {
		// console.log(dataId)  
		showData()

	}
}

// verify user input for task


// verify user input for log-in page