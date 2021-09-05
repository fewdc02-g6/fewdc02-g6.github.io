import React from 'react'
import { Link } from 'react-router-dom'
import './NavLink.css'

export default function NavbLink() {
    return (
        <div className="nav">
            <div className="nav-menu">
                <h2 className="title">To Do List</h2>
                <Link className="nav-menu-item" to='/'>Show All Task</Link>
                <Link className="nav-menu-item" to='/work'>Work</Link>
                <Link className="nav-menu-item" to='/family'>Family</Link>
                <Link className="nav-menu-item" to='/personal'>Personal</Link>
                <Link className="nav-menu-item" to='/calendar'>Calendar</Link>
                <Link className="nav-menu-item" to='/logout'>Log Out</Link>
            </div>
        </div>
    )
}
