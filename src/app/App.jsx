import { useState } from 'react'
import './App.css'
import HomePage from '../pages/HomePage/HomePage'
import JobPage from '../pages/JobsPage/JobsPage'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

function App() {

  return (
    <div>
      <NavBar />
      <HomePage />
      <Footer/>
      {/* <JobPage /> */}
    </div>
  )
}

export default App