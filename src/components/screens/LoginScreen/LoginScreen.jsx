import React from 'react'
import './LoginScreen.css'

const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix logo" className="loginScreen__logo"/>
        <button className="loginScreen__button"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default LoginScreen
