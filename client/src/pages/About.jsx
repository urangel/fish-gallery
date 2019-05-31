import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'

function About() {
  return (
    <div>
      <Navbar/>
      <div className="d-flex flex-column" id="about">
        <h1 className="text-center">About</h1>
        <p className="text-center">
          Fish Gallery makes enjoying fishkeeping fun, easy, and exciting!
        </p>
        <ul className="ml-auto mr-auto">
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
