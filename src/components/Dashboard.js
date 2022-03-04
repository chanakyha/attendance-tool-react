import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  query,
  where,
  onSnapshot,
} from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [teacherData, setTeacherData] = useState({});

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    if (user.email) {
      const q = query(
        collection(db, "teachers"),
        where("email", "==", user.email)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        if (!querySnapshot.docs.length) {
          showToast(
            "The Email Address is not from an Teacher's Account",
            toast.error
          );
          onSignOut();
        }
      });
    }
  }, [user.email]);

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

  const showToast = (message, type) => {
    type(message, {
      position: "top-left",
      autoClose: 6000,
      hideProgressBar: true,
      closeOnClick: true,
      theme: "colored",
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <Navbar
        displayName={user.displayName}
        photoURL={user.photoURL}
        onSignOut={onSignOut}
      />
      This is Dashboard
      <button onClick={() => console.log(teacherData)}>Click Me</button>
    </div>
  );
}

export default Dashboard;
