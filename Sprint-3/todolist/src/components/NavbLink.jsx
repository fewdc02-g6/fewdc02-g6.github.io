import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbLink() {
    return (
        <>
            <h1>To Do List</h1>
            <Link to='/'>Show All Task</Link>
            <Link to='/work'>Work</Link>
            <Link to='/family'>Family</Link>
            <Link to='/personal'>Personal</Link>
            <Link to='/calendar'>Calendar</Link>
            <Link to='/logout'>Log Out</Link>
        </>
    )
}
