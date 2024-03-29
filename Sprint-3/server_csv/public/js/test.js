"use strict"

// global variables
var YY, MM, DD, dateArr, date
const leftArrow = document.querySelector('.fa-angle-left')
const rightArrow = document.querySelector('.fa-angle-right')
const displayTaskArea = document.querySelector('#divToDoList')
const divToDoHeader = document.querySelector('.to-do-list-header')
const memos = document.querySelector('.memo')
const footerMenuBtn = document.getElementById('footerBtn1')
const navBar = document.querySelector('.nav')
const addBtn = document.querySelector('.add-btn')
const addMemoDeleteBtn = document.getElementById('add-memo-delete-btn')
const popupWrapper = document.querySelector('.popup-wrapper')
const popupUpdateArea = document.querySelector('.popup-update-area')
const showToday = document.querySelector('.today-date')
const countMemo = document.querySelector('#count-memo')

// event listeners
window.addEventListener('load', () => {
	// console.log(YY)
	// console.log(MM)
	// console.log(MM.innerHTML)
	// console.log(YY.innerHTML)
	dateArr = document.querySelectorAll('.selectable')
	dateArr.forEach(i => {
		i.addEventListener('click', pickDate)
	})
	displayTaskArea.innerText = 'Please Pick a Date.'
})

const showTodayDate = () =>{
	let now = new Date()
	let dateStr = new Date().toDateString()
	showToday.innerHTML = dateStr
	console.log(now)
	console.log(dateStr)
}
window.addEventListener('load', showTodayDate)

const pickDate = event => {
	YY = document.querySelector('.year')
	MM = document.querySelector('.month')
	DD = event.target.innerText
	date = `${YY.innerHTML}-${monthToNum(MM.innerHTML)}-${DD}`
	divToDoHeader.innerHTML = date;
	getTaskByDate(date)
}

leftArrow.addEventListener('click', () => {
	// $('#divToDoList').empty() 
	// displayTaskArea.innerText = 'Please Pick a Date.'         
	// displayTaskArea.innerHTML = null
	dateArr = document.querySelectorAll('.selectable')
	dateArr.forEach(i => {
		i.removeEventListener('click', pickDate)
	})
	dateArr.forEach(i => {
		i.addEventListener('click', pickDate)
	})
})

rightArrow.addEventListener('click', () => {
	// $('#divToDoList').empty() 
	// displayTaskArea.replaceChildren
	// displayTaskArea.innerText = 'Please Pick a Date.'
	// displayTaskArea.innerHTML = null
	dateArr = document.querySelectorAll('.selectable')
	dateArr.forEach(i => {
		i.removeEventListener('click', pickDate)
	})
	dateArr.forEach(i => {
		i.addEventListener('click', pickDate)
	})
})

addBtn.addEventListener('click', () => {
	popupWrapper.classList.remove('hidden')
	addBtn.classList.add('hidden')
})

addMemoDeleteBtn.addEventListener('click', () => {
	popupWrapper.classList.add('hidden')
	addBtn.classList.remove('hidden')
})

document.querySelector('.add-form').addEventListener('submit', event => {
	event.preventDefault();
	addTask(event)
	// taskID++
})

// HTTP request
// add new task
async function addTask(event) {
	const form = event.target
	let type = form.type.value
	const dataObj = {
		id: taskID(),
		name: form.name.value,
		description: form.description.value,
		duedate: form.duedate.value,
		type: form.type.value.toLowerCase()
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
		alert('Task Added!')
		popupWrapper.classList.add('hidden')
		addBtn.classList.remove('hidden')
		// showData()
	}
}

// delete task
async function delTask(id) {
	let isDel = window.confirm('Confirm delete?')
	if(isDel){

		const url = 'http://localhost:8080/todolist/' + id
		const response = await fetch(url, {
			method: 'DELETE'
		})
		if (response.ok) {
			alert(`Task is deleted`)
			window.location.replace("http://localhost:8080/calendar.html")
		}
	}
}


// task ID
async function taskID() {
	let idArr = []
	let response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		const dataArr = await response.json()
		for (let data of dataArr) {
			idArr.push(parseInt(data.id))
		}
	}
	let ID = Math.max(...idArr) + 1
	return ID
}

// get task by date
const getTaskByDate = async (date) => {
	$('#divToDoList').empty()
	// console.log(date)
	
	let response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		const dataArr = await response.json()
		// console.log(dataArr)
		// let arr = []
		for (let data of dataArr) {
			if (data.duedate === date) {
				// arr.push(data)
				console.log(data.duedate)
				displayTaskArea.innerHTML = ''
				displayTaskArea.innerHTML +=
				`<div class="display-demo" id="${data.id}">
					<div class="${data.type}" ></div>

					<div class="memo-left-content">
						<p class="memoTitle">Task: ${data.name}</p>
						<p class="memoContent description">Detail: ${data.description}</p>
					</div>
					<div class="function">
						<svg class="update-btn" id="${data.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
						<svg class="delete-btn" id="${data.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
					</div>
				</div>`

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
						editTaskById(event.target.id)
					})
					// countMemo.innerHTML = display.childElementCount-1;
				}
				rightArrow.addEventListener('click', () => {
					console.log('del')
					displayTaskArea.innerText = 'Please Pick a Date.'
				})
				leftArrow.addEventListener('click', () => {
					console.log('del')
					displayTaskArea.innerText = 'Please Pick a Date.'
				})
			}else{
				// displayTaskArea.innerHTML = "<p>No task on this day...</p>"
			}
		}
	}
}

async function editTaskById(id) {
	let tempArr = {}
	let selectedArr = {}
	let addClassType
	const url = 'http://localhost:8080/todolist/'
	const response = await fetch(url)
	if (response.ok) {
		tempArr = await response.json()
		for (let item of tempArr) {
			if (item.id === id) {
				selectedArr = { ...item }
			}
		}
		addClassType = 'type-' + selectedArr.type.toLowerCase()
		popupUpdateArea.innerHTML =
			`<div class="add-memo">
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
								<input id="duedate" name="duedate" type="date" value="${selectedArr.duedate}" required><br>                
							</div>                       
							<input type="text" name="id" value="${selectedArr.id}" required hidden>          
						   <label for="message"></label>
						   <textarea id="description" name="description" rows="8" cols="40" required>${selectedArr.description}</textarea>                
							<input id="update-btn" type="submit" value="Update">                
						</form>
					</form>
				</div> `
	}
	console.log(addClassType)
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
		targetData.completed = 'false'
		updateTask(targetData)
	})
}

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
	}
}

const clearDisplayArea = (arr) => {
	divToDoHeader.innerHTML = obj.duedate;
}

const monthToNum = (text) => {
	switch (text) {
		case "January":
			return '01';
		case "February":
			return '02';
		case "March":
			return '03';
		case "April":
			return '04';
		case "May":
			return '05';
		case "June":
			return '06';
		case "July":
			return '07';
		case "August":
			return '08';
		case "September":
			return '09';
		case "October":
			return '10';
		case "November":
			return '11';
		case "December":
			return '12';
	}
}
const monthToFull = (text) => {
	switch (text) {
		case "Jan":
			return 'January';
		case "Feb":
			return 'February';
		case "Mar":
			return 'March';
		case "Apr":
			return 'April';
		case "May":
			return 'May';
		case "Jun":
			return 'June';
		case "Jul":
			return 'July';
		case "Aug":
			return 'August';
		case "Sep":
			return 'September';
		case "Oct":
			return 'October';
		case "Nov":
			return 'November';
		case "Dec":
			return 'December';
	}
}

footerMenuBtn.addEventListener('click', () => {
	if (footerMenuBtn.value == 'on') {
		navBar.classList.add('show')
		document.getElementById('footerBtn1').value = 'off'
	} else {
		navBar.classList.remove('show')
		document.getElementById('footerBtn1').value = 'on'
	}
})

/*
let now = new Date()
// let Y = now.getFullYear()
// let M = now.getMonth()
// let D = now.getDate()
let dateStr = new Date().toDateString()
	// showToday.innerHTML = now
let arr = dateStr.split(' ')
	console.log(now)
	console.log(arr)
*/
