import React from "react";
import "./Login.css";

import GoogleLogoSVG from "../SVG/google-logo.svg";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="banner">
          <h1>Attendance Tool</h1>
          <p>
            This is a student attendance tool made under Smart India Hackathon
            2022 for project statement given by Government of Maharashtra{" "}
          </p>
          <h1>उपस्थिती तंत्रज्ञान</h1>
          <p>
            स्मार्ट इंडिया हॅकाथॉन 2022 अंतर्गत महाराष्ट्र सरकारने दिलेल्या
            प्रकल्प विधानासाठी हे उपस्थिती तंत्रज्ञान आहे
          </p>
        </div>

        <div className="form-content">
          <h5 className="form-title-en">
            Welcome! Please log in with teacher ID to continue
          </h5>
          <h5 className="form-title-mr">
            स्वागत आहे! कृपया सुरू करण्यासाठी शिक्षक आयडीसह लॉग इन करा
          </h5>
          <div className="inline-flex form-mode-btn">
            <h2 id="login-btn-teacher" underline="true">
              Teacher Log In
            </h2>
            <p>|</p>
            <h2 id="login-btn-student" underline="false">
              Student Log in
            </h2>
          </div>

          <div className="login-content-teacher" data-visible="true">
            <form action="">
              <div className="flex">
                <input
                  id="email-address"
                  type="email"
                  placeholder="Teacher Email Address"
                />
                <input id="password" type="password" placeholder="Password" />
                <input id="submit" type="submit" value="Log in" />
              </div>
            </form>
            <br />
            <div className="inline-flex" id="google-sign-in">
              <img
                src={GoogleLogoSVG}
                alt="google icon"
                width="20rem"
                id="google-icon"
              />
              <input id="g-submit" type="submit" value="      Google sign in" />
            </div>
          </div>

          <div className="login-content-student" data-visible="false">
            <form action="">
              <div className="flex">
                <input
                  id="email-address-student"
                  type="email"
                  placeholder="Student Email Address"
                />
                <input
                  id="password-student"
                  type="password"
                  placeholder="Password"
                />
                <input id="submit-student" type="submit" value="Log in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
