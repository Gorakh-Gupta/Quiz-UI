import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function RouterPath() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Navbar />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouterPath
