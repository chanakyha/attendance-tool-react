import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import TeacherDash from "./TeacherDash";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  query,
  where,
  onSnapshot,
  collectionGroup,
  getDocs,
} from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { showToast } from "../functions/function";
import StudentDash from "./StudentDash";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(null);

  const getTeacherFireData = async (email) => {
    const querySnapshot = await getDocs(
      query(collection(db, "teachers"), where("email", "==", email))
    );

    return querySnapshot;
  };
  const getStudentFireData = async (email) => {
    const querySnapshot = await getDocs(
      query(collection(db, "students"), where("email", "==", email))
    );

    return querySnapshot;
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getTeacherFireData(user.email).then((res) =>
          setTeacher(res.docs.length)
        );
        getStudentFireData(user.email).then((res) =>
          setStudent(res.docs.length)
        );
      } else {
        navigate("/login");
      }
    });
  }, [user]);

  useEffect(() => {
    if (teacher != null && student != null) {
      if (student === 0 && teacher === 0) {
        onSignOut();
        showToast("The Email Address is Invalid !!", toast.error);
      }
    }
  }, [teacher, student]);

  const onSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {[teacher, student] != [null, null] && teacher == 1 ? (
        <TeacherDash
          userEmail={user.email}
          displayName={user.displayName}
          photoURL={user.photoURL}
          onSignOut={onSignOut}
        />
      ) : [teacher, student] != [null, null] && student == 1 ? (
        <StudentDash email={user.email} onSignOut={onSignOut} />
      ) : (
        <div style={{ height: "100%" }} className="spinner__container">
          <div
            className="spinner-border text-success"
            style={{ width: "10rem", height: "10rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
