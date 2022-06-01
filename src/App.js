import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"

function App() {
    return (
        <>
            <Router>
                <Home />
                <Switch>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/register' element={<Register />} />
                </Switch>
            </Router>
        </>
    )
}

export default App