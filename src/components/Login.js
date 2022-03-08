import React, { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { showToast } from "../functions/function";
import "./Login.css";

import GoogleLogoSVG from "../SVG/google-logo.svg";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);

  const [teacherStudent, setTeacherStudent] = useState({
    english: "Teacher",
    marathi: "शिक्षक",
  });
  const [googleLoginBtn, setGoogleLoginBtn] = useState(1);

  const [teacherTab, setTeacherTab] = useState("true");
  const [studentTab, setStudentTab] = useState("false");

  const [enteredMail, setEnteredMail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");

  const onLoginEmailPass = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, enteredMail, enteredPass)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        showToast("Please Enter the login credentials correctly", toast.error);
      });
  };

  const onGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
            2022 for project statement given by Government of Maharashtra
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
                  onChange={(e) => {
                    setEnteredMail(e.target.value);
                  }}
                  value={enteredMail}
                  id="email-address"
                  type="email"
                  placeholder={teacherStudent.english + " mail ID"}
                />
                <input
                  onChange={(e) => {
                    setEnteredPass(e.target.value);
                  }}
                  value={enteredPass}
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <input
                  onClick={onLoginEmailPass}
                  id="submit"
                  type="submit"
                  value="Log in"
                />
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
                  onClick={onGoogleLogin}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
