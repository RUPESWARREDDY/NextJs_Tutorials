"use client"
import { useState } from "react";
function Counter() {
    const [count,setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={increment}>inc</button>
      <button onClick={()=>{setCount(count-1)}}>dec</button>
    </div>
  )
}

export default Counter
