import React, { useState } from 'react'
import { Route, Switch,Link } from 'react-router-dom'
import Footer from './Footer'
import MemoList from './MainContent/MemoList'
import Calendar from './Calendar/Calendar'
import Form from './Form'
import getAllData from '../components/getAllData'
// import Test from './Test'


export default function Main() {
    // const navList = ['Show All Task', 'Work', 'Family', 'Personal', 'Calendar', 'Log Out']
    let initialvalue = [
        {
            id: 1,
            name: 'project',
            description: 'react',
            duedate: '2021-09-10',
            type: 'work',
            completed: 'false'
        },
        {
            id: 2,
            name: 'interview',
            description: 'greentomato',
            duedate: '2021-09-30',
            type: 'work',
            completed: 'false'
        },
        {
            id: 3,
            name: 'Dinner',
            description: 'mum birthday',
            duedate: '2021-06-30',
            type: 'family',
            completed: 'true'
        }
    ]
    const [memos, setMemos] = useState(initialvalue)
    const [showForm, setShowForm] = useState('')
    const hide =()=>{
        setShowForm("block")
    }
    let data = getAllData()
    console.log(data)
    // const []
    const addTask = (obj) =>{
        let response = fetch()
    }
    return (
        <>
            <Switch>
                <Route path='/work' >
                    <h1>Work</h1>
                    <MemoList memos={memos} taskType={'work'} />
                </Route>
                <Route path='/family' >
                    <h1>Family</h1>
                    <MemoList memos={memos} taskType={'family'} />
                </Route>
                <Route path='/personal' >
                    <h1>Personal</h1>
                    <MemoList memos={memos} taskType={'personal'} />
                </Route>
                <Route path='/calendar' >
                    <h1>Calendar</h1>
                    <Calendar />
                </Route>
                <Route path='/logout' >
                    <h1>Log Out</h1>
                </Route>
                <Route path='/' exact>
                    <h1>Show All Task</h1>
                    <MemoList memos={memos} taskType={'all'} />
                </Route>
                <Route path='/update_task'>
                    <Form buttonText='Update' />
                </Route>
                <Route path='/add_task'>
                    <Form  buttonText='Add' />
                </Route>
                <Route path='/'>
                    <h1>404: Not Found</h1>
                </Route >
            </Switch>
            <button className="add-btn">
                    <Link to="/add_task">+</Link>
                </button>
            <Footer />
        </>
    )
}
