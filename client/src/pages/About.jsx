import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'

function About() {
  return (
    <div>
      <Navbar/>
      <div id="about">
        <h1>About</h1>
        <p>
          Fish Gallery makes enjoying fishkeeping fun, easy, and exciting!
        </p>
        <ul>
          <li>Learn about fish and fish care</li>
          <li>Sign up to add your tank(s) and fish</li>
          <li>Share photos with your friends</li>
          <li>Check your tank's health</li>
          <li>Plan your next tank and tankmates</li>
        </ul>
      </div>      
    </div>
  )
}

export default About
