import React, { useEffect, useState } from "react";
import "../style/Nav.css";

const Nav = () => {
    const [show,handleShow] = useState()
  useEffect(() => {
      window.addEventListener('scroll',()=>{
          if(window.scrollY>100){
              handleShow(true)
          }
          else handleShow(false)
      })
      return ()=>{
          window.removeEventListener('scroll')
      }
  }, []);

  return (

    <div className={`nav ${show&&"nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/common/0/of"
        alt="Netflix Logo"
      />
      <img
        className="nav_avtar"
        src="https://pbs.twing.com/profile_image/124011999041155"
        alt="netflix logo"
      />
    </div>
  );
};

export default Nav;
