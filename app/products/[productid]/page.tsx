
export default async function page({params,}:{params:Promise<{productid:string}>}) {
    // const id=(await params).productid
const {productid}=await params
  return (
    <div>
    deatils about  product {productid}
    </div>
  )
}
