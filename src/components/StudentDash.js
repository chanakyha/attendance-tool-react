import React, { useEffect, useState } from "react";
import StudentNav from "./StudentNav";
import "./StudentDash.css";

import { db, query, collection, where, onSnapshot } from "../firebase";

function StudentDash(props) {
  const [studentData, setStudentData] = useState({});
  useEffect(() => {
    if (props.email) {
      const unsubscribe = onSnapshot(
        query(collection(db, "students"), where("email", "==", props.email)),
        (querySnapshot) => {
          querySnapshot.docs.map((doc) =>
            setStudentData({ id: doc.id, data: doc.data() })
          );
        }
      );
      return unsubscribe;
    }
  }, [props.email]);

  return (
    <div className="studentdashboard">
      <StudentNav
        displayName={studentData?.data?.name}
        onSignOut={props.onSignOut}
      />
    </div>
  );
}

export default StudentDash;
