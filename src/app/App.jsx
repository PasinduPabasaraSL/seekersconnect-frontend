import { useState } from 'react'
import './App.css'
import HomePage from '../pages/HomePage/HomePage'
import JobPage from '../pages/JobsPage/JobsPage'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import WhySeekersConnect from '../pages/WhySeekersConnect/WhySeekersConnect'
import { BrowserRouter as Router, Route, Routes } from "react-router"
import SignUp from '../pages/SignUp/SignUp'
import SignIn from '../pages/SignIn/SignIn'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobPage />} />
          <Route path="/why" element={<WhySeekersConnect />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App