import React, { useState, useEffect } from 'react'
// import getAllData from '../components/getAllData'

export default function Test() {
    const [memos, setMemos] = useState([])

    const getAllData = async () => {
        try {
            let response = await fetch('http://localhost:8080/todolist')
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setMemos(data)

            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        console.log("useEffect");
        getAllData()
    },[])

    return (
        <div>
            {memos.map((memo, index) => 
                (<div key={index}>
                    <h5>{memo.name}</h5>
                    <p>{memo.description}</p>
                </div>)
                )}
        </div>
    )
}
