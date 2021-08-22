"use strict"

// global variables
var YY, MM, DD, dateArr, date
const leftArrow = document.querySelector('.fa-angle-left')
const rightArrow = document.querySelector('.fa-angle-right')
const displayTaskArea = document.querySelector('#divToDoList')
const divToDoHeader = document.querySelector('.to-do-list-header')

// event listeners
window.addEventListener('load', () => {
	// console.log(YY)
	// console.log(MM)
	// console.log(MM.innerHTML)
	// console.log(YY.innerHTML)
	dateArr = document.querySelectorAll('.selectable')
	dateArr.forEach(i => {
		i.addEventListener('click', (event) => {
			YY = document.querySelector('.year')
			MM = document.querySelector('.month')
			DD = event.target.innerText
			date = `${YY.innerHTML}-${monthToNum(MM.innerHTML)}-${DD}`
			divToDoHeader.innerHTML = date;
			getTaskByDate(date)
		})
	})
})

leftArrow.addEventListener('click', ()=>{
	dateArr = document.querySelectorAll('.selectable')
	dateArr.forEach(i => {
		i.addEventListener('click', (event) => {
			YY = document.querySelector('.year')
			MM = document.querySelector('.month')
			DD = event.target.innerText
			date = `${YY.innerHTML}-${monthToNum(MM.innerHTML)}-${DD}`
			divToDoHeader.innerHTML = date;
			getTaskByDate(date)
		})
	})
})

rightArrow.addEventListener('click', ()=>{
	dateArr = document.querySelectorAll('.selectable')
	dateArr.forEach(i => {
		i.addEventListener('click', (event) => {
			YY = document.querySelector('.year')
			MM = document.querySelector('.month')
			DD = event.target.innerText
			date = `${YY.innerHTML}-${monthToNum(MM.innerHTML)}-${DD}`
			divToDoHeader.innerHTML = date;
			getTaskByDate(date)
		})
	})
})

// functions
const getTaskByDate = async (date) => {
	console.log(date)
	let response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		const dataArr = await response.json()
		console.log(dataArr)
		for (let data of dataArr) {
			if (data.duedate === date) {
				console.log(date)
				console.log(data.duedate)
				
				
				
				displayTaskArea.innerHTML +=
					`<div class="memo memo-${data.id}" id="${data.id}">
    			<div class="memoTopBorder ${data.type} ${data.type}"></div>
    			<div class="memoTopBar">
        		<p id="${data.id}" class="memoType blue">Task-${data.id}: ${data.name}</p> 
        		<svg class="delete-btn" id="${data.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    			</div>    
    			<div class="memoContent description">${data.description}</div>
    			<div class="memoContent">${data.type}</div>
    			<div class="memoContent duedate">Due Date:${data.duedate}</div>
    			<div class="memoMiniFunction">                     
        		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
        		<svg  class="update-btn" id="${data.id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    			</div>    
				</div>`; 
			}
		}
	}
}

const showTaskByDate = obj => {
	divToDoHeader.innerHTML = obj.duedate;
/*
	displayTaskArea.innerHTML =
		`<div class="memo memo-${obj.id}" id="${obj.id}">
    			<div class="memoTopBorder ${obj.type} ${obj.type}"></div>
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
				</div>`;
*/

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
