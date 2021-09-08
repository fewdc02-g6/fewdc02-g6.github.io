import Main from './components/Main'
import NavLink from './components/Navbar/NavLink'
import Greeting from './components/MainUp/Greeting'
import { Route, Switch, Link } from 'react-router-dom'
import Form from './components/Form'
import MemoList from './components/MainContent/MemoList'
import Footer from './components/Footer'
import Memo from './components/MainContent/Memo'
import React, { useState } from 'react'


function App() {

    return (
        <div className="main-container">
            <NavLink />
            <div className="main-content">
                <Greeting />
                <Main />
                <Footer />
                

            </div>
        </div>
    );
}

export default App;
