import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './Footer'
// import Test from './Test'
import MemoList from './MainContent/MemoList'
import getAllData from '../components/getAllData'


export default function Main() {
    // const navList = ['Show All Task', 'Work', 'Family', 'Personal', 'Calendar', 'Log Out']
    
    // const response = await fetch('http://localhost:8080/todolist')

    let data = getAllData()
    console.log(data)
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
    setMemos(newdata)
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
                </Route>
                <Route path='/logout' >
                    <h1>Log Out</h1>
                </Route>
                <Route path='/' exact>
                    <h1>Show All Task</h1>
                    <MemoList memos={memos} taskType={'all'}/>
                </Route>
                <Route path='/'>
                    <h1>404: Not Found</h1>
                </Route>
            </Switch>
            <button className="add-btn">+</button>
            <Footer />
        </>
    )
}
