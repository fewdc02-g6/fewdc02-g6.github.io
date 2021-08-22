"use strict"
var YY,MM,DD, dateArr, date


window.addEventListener('load',()=>{
	
		
	// console.log(YY)
	// console.log(MM)
	// console.log(MM.innerHTML)
	// console.log(YY.innerHTML)
	dateArr = document.querySelectorAll('.selectable')
	dateArr.forEach( i =>{		
		i.addEventListener('click', (event)=>{
			YY = document.querySelector('.year')
			MM = document.querySelector('.month')
			DD = event.target.innerText
			date = `${YY.innerHTML}-${monthToNum(MM.innerHTML)}-${DD}`			
			showTaskByDate(date)	
	
		})
		
	})
})

const showTaskByDate = async (date) =>{
	console.log(date)
	let response = await fetch('http://localhost:8080/todolist')
	if(response.ok){

	}
}

const monthToNum = (text) =>{
	switch (text){
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
const monthToFull = (text) =>{
	switch (text){
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
