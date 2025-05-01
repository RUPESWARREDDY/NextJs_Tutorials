"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function Error({error,reset}:{error:Error,reset:()=>void}) {
    const router=useRouter()
    const reload=()=>{
  return  startTransition(() => {
        router.refresh();
        reset();
    });
    }
  return (
    <div>
      {error.message} in review id.
      <button className="btn bg-red text-white-400" onClick={() => { reload(); }}>try again</button>
    </div>
  )
}
