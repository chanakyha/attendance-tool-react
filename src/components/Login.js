import React, { useState } from "react";
import "./Login.css";

import GoogleLogoSVG from "../SVG/google-logo.svg";

function Login() {
  const [teacherStudent, setTeacherStudent] = useState({
    english: "Teacher",
    marathi: "शिक्षक",
  });
  const [googleLoginBtn, setGoogleLoginBtn] = useState(1);

  const [teacherTab, setTeacherTab] = useState("true");
  const [studentTab, setStudentTab] = useState("false");

  const onTeacherLoginScreen = () => {
    setTeacherStudent({
      english: "Teacher",
      marathi: "शिक्षक",
    });

    setTeacherTab("true");
    setStudentTab("false");
    setGoogleLoginBtn(1);
  };
  const onStudentLoginScreen = () => {
    setTeacherStudent({
      english: "Student",
      marathi: "विद्यार्थी ",
    });

    setTeacherTab("false");
    setStudentTab("true");
    setGoogleLoginBtn(0);
  };

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
            Welcome! Please log in with {teacherStudent.english} ID to continue
          </h5>
          <h5 className="form-title-mr">
            स्वागत आहे! कृपया सुरू करण्यासाठी {teacherStudent.marathi} आयडीसह
            लॉग इन करा
          </h5>
          <div className="inline-flex form-mode-btn">
            <h2
              onClick={onTeacherLoginScreen}
              id="login-btn-teacher"
              underline={teacherTab}
            >
              Teacher Log In
            </h2>
            <p>|</p>
            <h2
              onClick={onStudentLoginScreen}
              id="login-btn-student"
              underline={studentTab}
            >
              Student Log in
            </h2>
          </div>

          <div className="login-content-teacher" data-visible="true">
            <form action="">
              <div className="flex">
                <input
                  id="email-address"
                  type="email"
                  placeholder={teacherStudent.english + " mail ID"}
                />
                <input id="password" type="password" placeholder="Password" />
                <input id="submit" type="submit" value="Log in" />
              </div>
            </form>
            <br />
            {googleLoginBtn ? (
              <div className="inline-flex" id="google-sign-in">
                <img
                  src={GoogleLogoSVG}
                  alt="google icon"
                  width="20rem"
                  id="google-icon"
                />
                <input
                  id="g-submit"
                  type="submit"
                  value="      Google sign in"
                />
              </div>
            ) : (
              <></>
            )}
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
