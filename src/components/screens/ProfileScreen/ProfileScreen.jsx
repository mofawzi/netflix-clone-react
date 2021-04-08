import React from 'react'
import './ProfileScreen.css'
import Navbar from "../../Navbar/Navbar.jsx";
import {useSelector} from 'react-redux'
import { auth } from '../../../firebase';
import {selectUser} from '../../../store/reducers/UserReducer'

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User avatar"/>
          <div className="profileScreen__details">
          <h2>{user.email}</h2>
          <div className="profileScreen__plans">
            <h3>Plans</h3>
            <button 
            onClick={() => auth.signOut()}
            className="profileScreen__signOut">Sign Out</button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default ProfileScreen
