export default async function Contacts({params,}:{params: Promise <{slug: string}>}) {
    const {slug}=await params
  return (
    <div>
    <h1> contacts name : {slug}</h1> 
    </div>
  )
}
