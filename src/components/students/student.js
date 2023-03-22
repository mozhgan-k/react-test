import React from "react";
import './students.css'
import Button from "../UI/button";
const Student = (props) => {
  return(
    <div className="student-card">
      <label>شماره دانش آموزی {props.students.id}</label>
      <label>نام و نام خانوادگی :</label>
      <input type="text" value={props.students.name} onChange={props.nameChanged}/>

      <label> کلاس :</label>
      <input type="text" value={props.students.class}/>

      <label> شماره تلفن :</label>
      <input type="number" value={props.students.phone}/>

      <label> ایمیل :</label>
      <input type="email" value={props.students.email}/>

      <Button btnType="danger" clicked={props.deleted}>حذف</Button>
    </div>
  )
}

export default Student