import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
        className="navbar__logo"
      />

      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netlix User"
        className="navbar__avatar"
      />
    </div>
  );
}

export default Navbar;
