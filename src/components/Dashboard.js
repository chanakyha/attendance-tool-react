import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";

import { getAuth, onAuthStateChanged, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

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
      <Navbar
        displayName={user.displayName}
        photoURL={user.photoURL}
        onSignOut={onSignOut}
      />
      This is Dashboard
    </div>
  );
}

export default Dashboard;
