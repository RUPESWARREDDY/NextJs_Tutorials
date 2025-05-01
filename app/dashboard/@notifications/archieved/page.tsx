import { Card } from "@/components/card";
import Link from "next/link";

export default function Archieved() {
  return (
   <Card> <div>
   archieved notifications
   <Link href="/dashboard" className="text-blue-500 pl-4">default</Link>
 </div></Card>
  )
}
