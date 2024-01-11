import React from "react";

function Header() {
    return (
    <div className="container-fluid pt-5">
    <div className="row header">
      <div className="col-lg-6 text-start">
        <img className="logo" src="../BiletX.svg" alt="logo"/>
      </div>
      <div className="col-lg-6 header-items">
        <a className="header-links" id="account-link" href="/login">Login</a>
        <i className='bx bxs-user-account bx-flashing bx-md'></i>
      </div>
    </div>
  </div>
    )
}

export default Header;