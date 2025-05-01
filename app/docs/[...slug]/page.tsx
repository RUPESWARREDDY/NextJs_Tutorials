
export default async function Slug({params,}:{params:Promise<{slug:string[]}>}) {
     const slug1=(await params).slug
     if(slug1.length==2)
     {
        return `feature${slug1[0]} and concept ${slug1[1]}`
     }
    else if(slug1.length==1)
        {
           return `feature${slug1[0]}`
        }
  return  <div> docs page</div>

}
