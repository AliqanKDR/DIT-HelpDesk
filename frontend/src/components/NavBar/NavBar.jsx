import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ lightMode }) => {
  const backgroundColor = lightMode
    ? { backgroundColor: "white" }
    : { backgroundColor: "#2c8dff" };

  const logoColorClasses = lightMode
    ? "navbar-brand navbar-brand-black"
    : "navbar-brand navbar-brand-white";

  const textColorClasses = lightMode
    ? "nav-link nav-link-blue align-middle"
    : "nav-link nav-link-white align-middle";

  const ticketBtnClasses = lightMode
    ? "btn btn-outline-info  align-middle"
    : "btn btn-outline-light  align-middle";

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={backgroundColor}>
        <div className="container-fluid">
          <Link to="/" className={logoColorClasses}>
            AITU Help Desk
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <Link to="/categories" className={textColorClasses}>
                  База Знаний
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link to="/forum" className={textColorClasses}>
                  Форум
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link to="/ticket" className={ticketBtnClasses}>
                  Заполнить анкету
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className={textColorClasses}>
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
