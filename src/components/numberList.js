import React from "react";

const NumberList = () => {
  const list = [1,2,3,4,5,6]
  const newList = list.map((list, i) => {
    return <li key={i}>{list}</li>
  })
  return (
    <div>
      <ul>{newList}</ul>
    </div>
  )
}

export default NumberList