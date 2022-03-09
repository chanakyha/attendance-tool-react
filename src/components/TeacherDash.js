import React, { useState, useEffect } from "react";
import TeacherNav from "./TeacherNav";

import TeacherYourDetails from "./TeacherYourDetails";

import { onSnapshot, db, collection, query, where } from "../firebase";

function TeacherDash({ userEmail, displayName, photoURL, onSignOut }) {
  const [screen, setScreen] = useState("dashboard");

  const [teacherData, setTeacherData] = useState({});

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "teachers"), where("email", "==", userEmail)),
      (querySnapshot) => {
        setTeacherData(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    );
  }, []);

  return (
    <div className="teacher__dashboard">
      <TeacherNav
        displayName={displayName}
        photoURL={photoURL}
        onSignOut={onSignOut}
        setScreen={setScreen}
      />
      {screen == "details" ? (
        <TeacherYourDetails photoURL={photoURL} teacherData={teacherData[0]} />
      ) : screen == "dashboard" ? (
        <h1>The Dashboard</h1>
      ) : (
        <h1>Nothing</h1>
      )}
    </div>
  );
}

export default TeacherDash;
