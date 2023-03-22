import React from "react";
import Student from "./student";
import "./students.css"
const Students = (props) => {
  let studentList = (
    props.studentList.map((student) =>
      <Student key={student.id} students={student} nameChanged={(event) => props.nameChanged(event, student.id)}
        deleted={props.deleted} />
    )
  )
  if (props.toggle) {
    return (
      <div className="student-grid">
        {studentList}
      </div>
    )
  }
  return studentList
}

export default Students