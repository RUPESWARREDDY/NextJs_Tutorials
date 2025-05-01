import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
   <Card><div>
  default Notifications
   <Link href="/dashboard/archieved" className="text-blue-500 pl-4">archieved</Link>
  </div></Card>
  )
}
