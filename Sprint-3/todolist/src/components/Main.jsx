import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Test from './Test'

export default function Main() {
    // const navList = ['Show All Task', 'Work', 'Family', 'Personal', 'Calendar', 'Log Out']

    return (
        <nav >           

                <Switch>
                    <Route path='/work' >
                        <h1>Work</h1>
                        <Test />
                    </Route>
                    <Route path='/family' >
                        <h1>Family</h1>
                    </Route>
                    <Route path='/personal' >
                        <h1>Personal</h1>
                    </Route>
                    <Route path='/calendar' >
                        <h1>Calendar</h1>
                    </Route>
                    <Route path='/logout' >
                        <h1>logout</h1>
                    </Route>
                    <Route path='/' exact>
                        <h1>Show All Task</h1>
                    </Route>
                    <Route path='/'>
                        <h1>404: Not Found</h1>
                    </Route>
                </Switch>

            
        </nav>
    )
}
