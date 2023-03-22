import React, { useState } from "react";
import './counter.css'
const Counter = (props) => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const handleChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }
  const btnStyle = {
    with: '80px',
    height: '28px',
    border: '1px solid indigo',
    borderRadius: '4px',
    cursor: 'pointer'
  }
  return(
    <div>
      <h1 className="tagStyle">{props.name}, You clicked {count} times</h1>
      <button style={btnStyle} onClick={() => setCount(count+1)}>
        Click Me !
      </button>
      <input name="name" value={name} onChange={handleChange}/>
    </div>
  )
}

export default Counter