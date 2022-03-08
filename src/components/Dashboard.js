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
  getDocs,
} from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { showToast } from "../functions/function";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [teacherData, setTeacherData] = useState({});

  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const unsubscribe = onSnapshot(
          query(collection(db, "teachers"), where("email", "==", user.email)),
          (querySnapshot) => {
            if (querySnapshot.docs.length) {
              setTeacher(1);
            } else {
              setTeacher(0);
            }
          }
        );
        const unsubscribe1 = onSnapshot(
          query(collection(db, "students"), where("email", "==", user.email)),
          (querySnapshot) => {
            if (querySnapshot.docs.length) {
              setStudent(1);
            } else {
              setStudent(0);
            }
          }
        );

        if (
          teacher != null &&
          student != null &&
          teacher == 0 &&
          student == 0
        ) {
          navigate("/login");
          setTeacher(null);
          setStudent(null);
          showToast("The Email Address IS Invalid", toast.error);
          onSignOut();
        }
      } else {
        navigate("/login");
      }
    });
  }, [teacher, student]);

  const onSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {[teacher, student] != [null, null] && teacher == 1 ? (
        <TeacherDash
          displayName={user.displayName}
          photoURL={user.photoURL}
          onSignOut={onSignOut}
        />
      ) : (
        <h1>This is Students DB</h1>
      )}
    </div>
  );
}

export default Dashboard;
