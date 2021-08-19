async function addTask(event) {
    const form = event.target	
    // let type = form.name.value.toUpperCase()
	const dataObj = {	
		// id: taskID,	
		username: form.username.value,
		password: form.password.value		
	}
	

	
	const response = await fetch('http://localhost:8080/login', 
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dataObj)
	})
	if(response.ok){
		console.log('success')
        alert('haha')        
    }	
}

document.querySelector('.creatAc-form').addEventListener('submit', event => {
	event.preventDefault();
	addTask(event)
	// taskID++
})