import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`hello baby ${name}`)
  }
  const handleChange = (event) => {
    setName(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="submit"/>
    </form>
  )
}

export default Form