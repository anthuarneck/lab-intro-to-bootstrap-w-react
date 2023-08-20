import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-text" style={{fontWeight: "bold"}}>Travel<span style={{ color: "gold", fontFamily: "Great Vibes, cursive" }}>Blog</span></span>
            <div>
          <a className="">About</a>
          </div>
          <div>
          <a className="">Popular Posts</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
