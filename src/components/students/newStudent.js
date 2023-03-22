import React from "react";
import Button from "../UI/button";
import './students.css'
const NewStudent = () => {
  return (
    <div className="student-card">
      <h1>افزودن دانش آموز جدید</h1>

      <label>نام و نام خانوادگی :</label>
      <input type="text" />

      <label> کلاس :</label>
      <input type="text" />

      <label> شماره تلفن :</label>
      <input type="number" />

      <label> ایمیل :</label>
      <input type="email" />

      <Button btnType="success" >افزودن</Button>
    </div>
  )
}

export default NewStudent