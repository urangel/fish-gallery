import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'

function Home() {
  return (
    <div>
      <Navbar/>
      <div id="landing" className="container-fluid d-flex justify-content-center">
        <img src="/images/aquarium-aquatic-clown-fish.jpg" alt="clown fish"></img>
        <h1>Finding Fish Friends</h1>
      </div>
    </div>
  )
}

export default Home
