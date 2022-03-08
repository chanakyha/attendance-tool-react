import React from "react";
import TeacherNav from "./TeacherNav";

function TeacherDash({ displayName, photoURL, onSignOut }) {
  return (
    <div>
      <TeacherNav
        displayName={displayName}
        photoURL={photoURL}
        onSignOut={onSignOut}
      />
    </div>
  );
}

export default TeacherDash;
