"use client"

import { usePathname } from "next/navigation"
  
export default function Notfound() {
 const pathname=usePathname().split('/')
  return (
    <div>
      page not found for product{pathname[1] } and review {pathname[2]}
    </div>
  )
}
