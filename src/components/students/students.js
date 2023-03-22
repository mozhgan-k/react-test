import React from "react";
import Student from "./student";
import "./students.css"
const Students = (props) => {
  if (props.toggle) {
    return (
      <div className="student-grid">
        {
          props.studentList.map((student) =>
            <Student key={student.id} students={student} nameChanged={(event) => props.nameChanged(event, student.id)}
              deleted={props.deleted} />
          )
        }
      </div>
    )
  }
  return (
    props.studentList.map((student) =>
      <Student key={student.id} students={student} nameChanged={(event) => props.nameChanged(event, student.id)}
        deleted={props.deleted} />
    )
  )
}

export default Students