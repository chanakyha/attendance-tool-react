import React from "react";
import { PersonCircle, PlusCircle, PencilSquare } from "react-bootstrap-icons";

import "./TeacherYourDetails.css";

function TeacherYourDetails({ teacherData, photoURL }) {
  console.log(teacherData);
  return (
    <div
      className="teacher__details"
      style={{ marginTop: "4em", display: "flex", justifyContent: "center" }}
    >
      <div className="card" style={{ width: "80%" }}>
        <div className="text-center card-header h1">Your Personal Details</div>
        <div className="card-body">
          <ol className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Name</div>
                {teacherData.name}
              </div>
              {photoURL ? (
                <img
                  src={photoURL}
                  style={{ width: "3em", height: "3em", borderRadius: "50%" }}
                  alt="Profile Avatar"
                />
              ) : (
                <PersonCircle style={{ width: "3em", height: "3em" }} />
              )}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subject</div>
                {teacherData.subject}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Class Teacher</div>
                {teacherData.classTeacher}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Email Address</div>
                {teacherData.email}
              </div>
            </li>
          </ol>
          <div className="btn-group">
            <button className="btn btn-outline-primary">
              Add <PlusCircle />
            </button>
            <button className="btn btn-outline-success">
              Edit <PencilSquare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherYourDetails;
