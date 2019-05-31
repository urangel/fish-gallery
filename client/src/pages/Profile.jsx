import React from 'react'
import Navbar from '../components/Navbar/Navbar';

function Profile() {

  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
  }

  return (
    <div>
      <Navbar/>
      <div id="profile" className="d-flex flex-column justify-content-center">
        <h1 className="text-center">Profile</h1>
        <img id="profile-image" src="https://images.pexels.com/photos/859265/pexels-photo-859265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="profile picture"/>
        <h2 className="text-center">My Fish</h2>
        <h2 className="text-center">My Tanks</h2>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
    </div>
  )
}

export default Profile
