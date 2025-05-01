

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
         
        <div>homepage</div>
        <Link className="text-blue-500 mr-5" href={'/blog'} replace>blog</Link>
        <Link className="text-blue-500 mr-5" href="/article/breaking-news-123?lang=en">read in english</Link>
        <Link className="text-blue-500 mr-5" href="/article/breaking-news-123?lang=fr">read in french</Link>
      
     
    </div>
  );
}
