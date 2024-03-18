import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {
  const {user} = useContext(UserContext)
    return (
    <div className="container-fluid pt-5">
    <div className="row header">
      <div className="col-lg-6 text-start">
        <img className="logo" src="../BiletX.svg" alt="logo"/>
      </div>
      <div className="col-lg-6 header-items">
      {user === null ? 
        <a className="header-links" id="account-link" href="/login">Login</a>
        :
        <a className="header-links" id="account-link" href="/login">{user}</a>
      }
        <i className='bx bxs-user-account bx-flashing bx-md'></i>
      </div>
    </div>
  </div>
  )
}

export default Header;