import React from "react";
import Button from "../UI/button";
import './students.css'
const NewStudent = (props) => {
  const {newStudentName, newStudentClass, newStudentPhone, newStudentEmail} = props
  const {newStudentNameHandler, newStudentClassHandler, newStudentPhoneHandler, newStudentEmailHandler} = props
  return (
    <div className="student-card">
      <h1>افزودن دانش آموز جدید</h1>

      <label>نام و نام خانوادگی :</label>
      <input type="text" value={newStudentName} onChange={newStudentNameHandler}/>

      <label> کلاس :</label>
      <input type="text" value={newStudentClass} onChange={newStudentClassHandler}/>

      <label> شماره تلفن :</label>
      <input type="number" value={newStudentPhone} onChange={newStudentPhoneHandler}/>

      <label> ایمیل :</label>
      <input type="email" value={newStudentEmail} onChange={newStudentEmailHandler}/>

      <Button btnType="success" clicked={props.addNewStudent}>افزودن</Button>
    </div>
  )
}

export default NewStudent