import React, { useState } from "react";
import "./Navbar.css";

import MainLogoSVG from "../SVG/attendance.svg";

import { PersonCircle, BoxArrowRight } from "react-bootstrap-icons";

function MainNav(props) {
  return (
    <div className="navbar">
      <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={MainLogoSVG} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Context
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Record Attendance
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="offcanvasNavbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {props.displayName || "Username"}{" "}
                    {props.photoURL ? (
                      <img className="avatar" src={props.photoURL} />
                    ) : (
                      <PersonCircle />
                    )}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="offcanvasNavbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Your Class
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Your Students
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Your Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button
                    onClick={props.onSignOut}
                    className="btn btn-outline-danger d-flex align-items-center"
                    type="submit"
                  >
                    Sign Out &nbsp; <BoxArrowRight />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
