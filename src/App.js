import { useState, useEffect } from 'react';
import './App.css';
import Students from './components/students/students';
import Button from './components/UI/button';
import NewStudent from './components/students/newStudent';
function App() {
  const [studentsState, setStudent] = useState([
    { id: 0, name: 'Mozhgan', class: 201, phone: '1234', email: 'example@gmail.com' },
    { id: 1, name: 'Sara', class: 202, phone: '12345', email: 'example@gmail.com' },
    { id: 2, name: 'Amir', class: 203, phone: '123456', email: 'example@gmail.com' },
    { id: 3, name: 'Narges', class: 204, phone: '1234567', email: 'example@gmail.com' },
    { id: 4, name: 'Marjan', class: 205, phone: '12345678', email: 'example@gmail.com' },
  ])
  const [newStudentName, setNewStudentName] = useState('')
  const [newStudentClass, setNewStudentClass] = useState('')
  const [newStudentPhone, setNewStudentPhone] = useState('')
  const [newStudentEmail, setNewStudentEmail] = useState('')
  const [arrayHolder, setArrayHolder] = useState([])
  useEffect(() => {
    setArrayHolder(studentsState)
  },[])
  const [toggle, setToggle] = useState(false)
  const [searchBarValue, setSearchBarvalue] = useState('')
  const nameChangeHandler = (event, id) => {
    const findChanged = studentsState.findIndex(s => s.id === id)
    const changedStudent = { ...studentsState[findChanged] }
    changedStudent.name = event.target.value
    const newStudents = [...studentsState]
    newStudents[findChanged] = changedStudent
    setStudent(newStudents)
  }
  const deleteStudent = (index) => {
    const students = [...studentsState]
    students.splice(index, 1)
    setStudent(students)
  }
  const toggleHandler = () => {
    setToggle(!toggle)
  }
  const searchHandler = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.name.toUpperCase()
      const textData = event.target.value.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    setStudent(itemData)
    setSearchBarvalue(event.target.value)
  }
  const newStudentNameHandler = (event) => {
    setNewStudentName(event.target.value)
  }
  const newStudentClassHandler = (event) => {
    setNewStudentClass(event.target.value)
  }
  const newStudentPhoneHandler = (event) => {
    setNewStudentPhone(event.target.value)
  }
  const newStudentEmailHandler = (event) => {
    setNewStudentEmail(event.target.value)
  }
  const addNewStudent = () => {
    let newStudentArray = [...studentsState]
    newStudentArray.push({
      'name': newStudentName,
      'class': newStudentClass,
      'phone': newStudentPhone,
      'email': newStudentEmail
    })
    setStudent(newStudentArray)
    setNewStudentName('')
    setNewStudentClass('')
    setNewStudentPhone('')
    setNewStudentEmail('')
  }
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <NewStudent
          newStudentName={newStudentName}
          newStudentClass={newStudentClass}
          newStudentPhone={newStudentPhone}
          newStudentEmail={newStudentEmail}
          newStudentNameHandler={newStudentNameHandler}
          newStudentClassHandler={newStudentClassHandler}
          newStudentPhoneHandler={newStudentPhoneHandler}
          newStudentEmailHandler={newStudentEmailHandler}
          addNewStudent={addNewStudent}
        />
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <input type="text" className="searchInp" value={searchBarValue} onChange={searchHandler}/>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Button btnType="success" clicked={toggleHandler}>تغییر وضعیت نمایش</Button>
      </div>
      <Students studentList={studentsState} nameChanged={nameChangeHandler} deleted={deleteStudent} toggle={toggle}/>
    </div>
  );
}

export default App;
