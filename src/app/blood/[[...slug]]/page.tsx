import React from "react";
import Link from "next/link";

type Props = {
  searchParams: {[key:string]:string|string[]|undefined};
  params: {slug: string[]}
}
export default function Home({params,searchParams}: Props) {
  
  return (
    <div>
      <h2 className="text-xl underline underline-offset-1">papiko</h2>
      <ul>
        {params.slug ? params.slug.map((key,index)=>(
          <li key={`val_${index}`}>{key}</li>
        )) : <Link href="blood/umbrella/great/titanic">titanic</Link>}
      </ul>
    </div>
  );
}
