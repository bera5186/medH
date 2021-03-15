import React from "react";

// 3rd party
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  const { user, logout } = useAuth0();

  return (
    <header className="navbar">
      <NavLink to="/">
        <h1 className="navbar__left">medH</h1>
      </NavLink>
      <ul className="navbar__right">
        <li className="navbar__right-item">
          <img
            width="30px"
            height="30px"
            style={{ borderRadius: "50%" }}
            src={user.picture}
            alt="avatar"
          />
        </li>
        <li className="navbar__right-item">
          <NavLink to="/dashboard" className="navbar__right-item--link">
            DashBoard
          </NavLink>
        </li>
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
            Log Out
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AuthNav;
