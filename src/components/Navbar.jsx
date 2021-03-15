import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { logout } = useAuth0();

  return (
    <header className="navbar">
      <NavLink to="/">
        <h1 className="navbar__left">medH</h1>
      </NavLink>
      <ul className="navbar__right">
        <li className="navbar__right-item">
          <NavLink
            to
            className="navbar__right-item--link"
            onClick={() =>
              logout({
                returnTo: window.location.origin,
              })
            }
          >
            What is it ?
          </NavLink>
        </li>
        <li className="navbar__right-item">
          <NavLink className="navbar__right-item--link" to="/dashboard">
            Login{" "}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
