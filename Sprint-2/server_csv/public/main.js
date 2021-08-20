fetch('http://localhost:8080/creatAc')
.then(res => res.json()
)
.then((data)=>{
    console.log(data)
})
.catch(err=> console.log('fale! '+err))



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