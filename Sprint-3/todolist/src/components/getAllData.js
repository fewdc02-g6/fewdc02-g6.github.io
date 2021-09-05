const getAllData = async () => {
    try {
        let response = await fetch('http://localhost:8080/todolist')
        if (response.ok) {
            let data = await response.json()
            console.log(data)
            return data

        }
    } catch (error) {
        console.log(error.message)
    }
}
export default getAllData