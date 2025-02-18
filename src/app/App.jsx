import { useState } from 'react'
import './App.css'
import HomePage from '../pages/HomePage/HomePage'
import JobPage from '../pages/JobsPage/JobsPage'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import WhySeekersConnect from '../pages/WhySeekersConnect/WhySeekersConnect'

function App() {

  return (
    <div>
      <NavBar />
      {/* <HomePage /> */}
      {/* <JobPage /> */}
      <WhySeekersConnect />
      <Footer />
    </div>
  )
}

export default App