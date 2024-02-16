import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Mui } from './components/Mui'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { Quiz } from './components/Quiz'


function RouterPath() {
    return (
        <div>
            <Router>
                <Routes>
                    
                    <Route path="/" exact element={<Navbar />} />
                    //user
                    <Route path="/signup"  element={<SignUp />} />
                    <Route path="/login"  element={<Login />} />
                    <Route path="/about"  element={<Mui />} />

                    //admin
                    <Route path="/admin/signup"  exact element={<SignUp />} />
                    <Route path="/admin/login" exact element={<Login />} />


                    //quiz
                    <Route path="/createquiz"  exact element={<Quiz />} />
                    
                </Routes>
            </Router>
        </div>
    )
}

export default RouterPath
