import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  // Handle black background on scrolling
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShow(true);
      } else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <img
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
        className="navbar__logo"
        onClick={()=> history.push("/")}
      />

      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netlix User"
        className="navbar__user"
        onClick={()=> history.push("/profile")}
      />
    </div>
  );
}

export default Navbar;
