const showButton = document.querySelector('.show-button')
// const addButton = document.querySelector('.add-button')
// const delButton = document.querySelector('.delete-btn')
const display = document.querySelector('.memolist')

// get data 
async function showData() {
	const response = await fetch('http://localhost:8080/todolist')
	if (response.ok) {
		const dataArr = await response.json()
		for (let i = 0; i < dataArr.length; i++) {
			console.log(dataArr[i].description)
			// add if-statment to sort out type(work, person, family) and status(pending, complete)
			display.innerHTML +=
				`<div class="memo">
    			<div class="memoTopBorder bg-blue"></div>
    			<div class="memoTopBar">
        		<p id="${dataArr[i].id}" class="memoType blue">Task-name/ Task-${dataArr[i].id}</p> 
        		<svg class="delete-btn update-btn" id="${dataArr[i].id}" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>                           
    			</div>
    
    			<div class="memoContent description">${dataArr[i].description}</div>
    			<div class="memoContent duedate">Due Date:${dataArr[i].duedate}</div>
    			<div class="memoMiniFunction">                     
        		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z"/></svg>
        		<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/></svg>
    			</div>    
				</div>`
		}
		const delButton = document.querySelectorAll('.delete-btn')
		for(let item of delButton){
			item.addEventListener('click', (event) =>{
            event.preventDefault();
			delTask(event.target.id)
			
		})
	}
	}
}

// add new task
async function addTask(event) {
	const form = event.target
	console.log(form.id.value)
	const dataObj = {
		id: form.id.value,
		name: form.name.value,
		description: form.description.value,
		duedate: form.duedate.value,
		type: form.type.value
	}
	const response = await fetch('http://localhost:8080/todolist', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(dataObj)
	})
	if(response.ok){
		console.log(dataObj)
	}
	

}

document.querySelector('.test-form').addEventListener('submit', event => {
	event.preventDefault();
	addTask(event)
})

// delete task
async function delTask(id){
	const url = 'http://localhost:8080/todolist/' + id
	const response = await fetch(url, {
		method: 'DELETE'
	})
	if(response.ok){
		console.log(`Task-${id} was deleted`)
	}

}

// 
showButton.addEventListener('click', showData)

