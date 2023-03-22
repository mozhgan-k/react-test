import React, {useState, useEffect} from 'react'

const StopWathcer = () => {
  const [watche] = useState(0)
  useEffect(() => {
    console.log('didmount')
  }, [])
  return(
    <div>
      {watche}
    </div>
  )
}

export default StopWathcer