import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { SignUp } from './components/SignUp'


function RouterPath() {
    return (
        <div>
            <Router>
                <Routes>
                    
                    <Route path="/" exact element={<Navbar />} />

                    //user
                    <Route path="/signup"  element={<SignUp />} />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default RouterPath
