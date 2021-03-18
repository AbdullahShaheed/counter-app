import React from "react";

const NavBar = (props) => {
  //we can destructure props and get totalCounters like this:  const NavBar = ({totalCounters}) to clean the code and get rid of props. props. props.
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
