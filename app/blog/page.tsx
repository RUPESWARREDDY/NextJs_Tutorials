import { Metadata } from "next"

export const metaData:Metadata={
  title:"blog page"
}
export default async function Blog() {
  await new Promise(resolve=>{setTimeout(resolve,3000)})
  return (
    <div>
      blog page
    </div>
  )
}
