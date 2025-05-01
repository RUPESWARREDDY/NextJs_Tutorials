"use client"
import Link from "next/link";
import { use } from "react";

// export default async function ArticleId({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ articleid: string }>;
//   searchParams: Promise<{ lang: "en"|"fr" }>;
// }) {

//   const { articleid } = await params; 
//   const { lang = "en" } = await searchParams; 

//   return (
//     <div>
//       <h1>News Article {articleid}</h1>
//       <p>Reading in {lang}</p>
//       <div>
//         <Link className="text-blue-400 mr-4" href={`/article/${articleid}?lang=en`}>english</Link>
//         <Link className="text-blue-400 mr-4" href={`/article/${articleid}?lang=fr`}>french</Link>
//         <Link className="text-blue-400 mr-4" href={`/article/${articleid}?lang=es`}>spanise</Link>
        
//       </div>
//     </div>
//   );
// }
export default  function ArticleId({
    params,
    searchParams,
  }: {
    params: Promise<{ articleid: string }>;
    searchParams: Promise<{ lang: "en"|"fr" }>;
  }) {
  
    const { articleid } = use(params); 
    const { lang = "en" } = use( searchParams); 
  
    return (
      <div>
        <h1>News Article {articleid}</h1>
        <p>Reading in {lang}</p>
        <div>
          <Link className="text-blue-400 mr-4" href={`/article/${articleid}?lang=en`}>english</Link>
          <Link className="text-blue-400 mr-4" href={`/article/${articleid}?lang=fr`}>french</Link>
          <Link className="text-blue-400 mr-4" href={`/article/${articleid}?lang=es`}>spanise</Link>
          
        </div>
      </div>
    );
  }
