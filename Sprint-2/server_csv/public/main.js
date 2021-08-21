// http://localhost:8080/user/register

// async function getResult(){
//     const res = await fetch('http://localhost:8080/user/register')
//     .then((res)=>{
//         console.log('success')
//     })
//     const data = await res.json()
//     console.log(data)
//     return data; 
// }

// getResult()


const loginBtn = document.getElementById('inputLogin')
loginBtn.addEventListener('click',()=>{
    window.location.href = "./index.html";
})



async function showData() {    
	const response = await fetch('http://localhost:8080/user/register')	
	if (response.ok) {
        console.log('success')
		
	}
}

showData()










// fetch('http://localhost:8080/user/login')
// .then(res => res.json()
// )
// .then((data)=>{
//     console.log(data)
// })
// .catch(err=> console.log('fale! '+err))


// fetch('http://localhost:8080/creatAc.html')
// .then((res)=>{
//     console.log('成功了 - ' +res)
//     console.log(res)

//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('fale! '+err)
// })