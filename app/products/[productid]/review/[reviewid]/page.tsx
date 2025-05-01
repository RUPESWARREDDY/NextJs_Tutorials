import { notFound } from "next/navigation"

function getRandomInt(count:number){
  return Math.floor(Math.random()*count)
}
export default async function Review({params,}:{params:Promise<{productid:string,reviewid:string}>}) {
  const random=getRandomInt(2)
const{productid,reviewid}=await params
if(random===1)
{
  throw new Error("error loading review")
}
if(parseInt(reviewid)>1000)
{
  return notFound()
}
    return (
    <div>
      review {reviewid} for product {productid}
    </div>
  )
}
