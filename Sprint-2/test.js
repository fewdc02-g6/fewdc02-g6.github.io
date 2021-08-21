var YY,MM,DD, dateArr, date

window.addEventListener('load',()=>{
	YY = document.querySelector('.year')
	MM = document.querySelector('.month')
		
	console.log(YY)
	console.log(MM)
	console.log(MM.innerHTML)
	console.log(YY.innerHTML)
	dateArr = document.querySelectorAll('.selectable')
	dateArr.forEach( i =>{		
		i.addEventListener('click', (event)=>{
			DD = event.target.innerText
			date = `${YY.innerHTML}-${monthToNum(MM.innerHTML)}-${DD}`
			console.log(date)
			
			
	
		})
	})
})

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

async function showTaskByDate(date){

}




