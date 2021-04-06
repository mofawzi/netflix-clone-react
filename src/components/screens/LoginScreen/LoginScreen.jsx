import React, { useState } from 'react'
import './LoginScreen.css'

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix logo" className="loginScreen__logo"/>
        <button 
        onClick={() => setSignIn(true)}
        className="loginScreen__button"
        >
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
          <h1>Unlimited films, TV programs and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button 
              onClick={() => setSignIn(true)}
              className="loginScreen__gettingStarted">Get started</button>
            </form>
          </div>
          </>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
