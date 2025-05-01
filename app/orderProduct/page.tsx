"use client"
import { redirect, useRouter } from "next/navigation"

export default function OrderProduct() {
  const router=useRouter();
  function handlesubmit(){
    // return router.push('/')
    // return router.back()
    // return router.refresh()
    return redirect('/')
    return router.replace('/')
  }
  return (
    <div>
      <h1>order product</h1>
      <button onClick={handlesubmit}>click</button>
    </div>
  )
}
