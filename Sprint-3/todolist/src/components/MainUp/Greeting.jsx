import React from 'react'
import './MainUp.css'
import MiniFunction from './MiniFunction'

export default function Greeting() {
	let dateStr = new Date().toDateString()
    return (
        <div className="welcome-text">
                <h2>Welcome Back ,  Michael</h2>
                <p className="today-date">{dateStr}</p>
                <MiniFunction/>
            </div>
    )
}
