 import React, { useState } from "react";
import "./AttendanceTracker.css";

function AttendanceTracker() {
  const [members, setMembers] = useState([
    { id: 1, name: "Member 1", status: "" },
    { id: 2, name: "Member 2", status: "" },
    { id: 3, name: "Member 3", status: "" },
    { id: 4, name: "Member 4", status: "" },
    { id: 5, name: "Member 5", status: "" },
    { id: 6, name: "Member 6", status: "" },
    { id: 7, name: "Member 7", status: "" },
    { id: 8, name: "Member 8", status: "" },
    { id: 9, name: "Member 9", status: "" },
    { id: 10, name: "Member 10", status: "" },
    { id: 11, name: "Member 11", status: "" },
    { id: 12, name: "Member 12", status: "" },
    { id: 13, name: "Member 13", status: "" },
    { id: 14, name: "Member 14", status: "" },
    { id: 15, name: "Member 15", status: "" },
    { id: 16, name: "Member 16", status: "" },
    { id: 17, name: "Member 17", status: "" },
    { id: 18, name: "Member 18", status: "" },
    { id: 19, name: "Member 19", status: "" },
    { id: 20, name: "Member 20", status: "" }
  ]);

  // Mark attendance
  const markAttendance = (id, status) => {
    setMembers(
      members.map((member) =>
        member.id === id
          ? { ...member, status: status }
          : member
      )
    );
  };

  // Count present members
  const presentCount = members.filter(
    (member) => member.status === "Present"
  ).length;

  // Count absent members
  const absentCount = members.filter(
    (member) => member.status === "Absent"
  ).length;

  return (
    <div className="container">
      <h1>Attendance Tracker System</h1>

      <p className="subtitle">
        Mark Present or Absent for 20 Members
      </p>

      <div className="attendance-list">
        {members.map((member) => (
          <div className="member-card" key={member.id}>
            <h3>
              {member.id}. {member.name}
            </h3>

            <div className="buttons">
              <button
                className="present-btn"
                onClick={() =>
                  markAttendance(member.id, "Present")
                }
              >
                Present
              </button>

              <button
                className="absent-btn"
                onClick={() =>
                  markAttendance(member.id, "Absent")
                }
              >
                Absent
              </button>
            </div>

            {/* Ternary operator */}
            <p className="status">
              Status:{" "}
              {member.status === ""
                ? "Not Marked"
                : member.status}
            </p>
          </div>
        ))}
      </div>

      {/* Final Attendance Count */}
      <div className="summary">
        <h2>Attendance Summary</h2>

        <p>
          Total Members: <b>{members.length}</b>
        </p>

        <p className="present">
          Present Count: <b>{presentCount}</b>
        </p>

        <p className="absent">
          Absent Count: <b>{absentCount}</b>
        </p>

        <p>
          Not Marked:{" "}
          <b>
            {members.length - presentCount - absentCount}
          </b>
        </p>
      </div>
    </div>
  );
}

export default AttendanceTracker;