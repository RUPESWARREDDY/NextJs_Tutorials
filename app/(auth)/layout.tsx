"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks=[
  {
    name:"register",href:"/register"
  },
  {
    name:"login",href:"/login"
  },
  {
    name:"forgotpassword",href:"/forgotpassword"
  }
]
export default function Forgotlayout({children,}:{children:React.ReactNode}) {
  const pathname=usePathname()
  return (
<>
<header>head</header>

<main>
  {navLinks.map(a=>{
    const isactive=pathname===a.href || (pathname.startsWith(a.href)&& a.href!="/")
    return( <Link className={isactive?"font-bold mr-4":" text-blue-500 mr-4"} href={a.href} key={a.name}>{a.name}</Link>)
  })}
  {children}</main>
<footer>footer</footer>
</>
  )
}
