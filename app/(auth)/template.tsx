"use client"
import { useState } from "react"

export default function Template({children}:{children:React.ReactNode}) {
    const [data,setdata]=useState('')
  return (
    <div>
        <input type="text" name={data} onChange={(e)=>setdata(e.target.value)} />
        <h1>data:{data}</h1>
      {children}
    </div>
  )
}
