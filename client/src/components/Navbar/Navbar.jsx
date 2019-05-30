import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Fish Gallery
      </a>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse-menu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav-collapse-menu">
        <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link" href="/">Home</a>
          <a className="nav-item nav-link" href="/profile">Profile</a>
          <a className="nav-item nav-link" href="/gallery">Gallery</a>
          <a className="nav-item nav-link" href="/about">About</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
