import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

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
        <Link className="header-links" id="account-link" to="/login">Login</Link>
        :
        <Link className="header-links" id="account-link" to="/">{user}</Link>
      }
        <i className='bx bxs-user-account bx-flashing bx-md'></i>
      </div>
    </div>
  </div>
  )
}

export default Header;