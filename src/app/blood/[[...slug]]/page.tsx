import React from "react";
import Link from "next/link";

export default async function Home({params}: {params: Promise<{slug: string[]}>}) {
  const slugs = await params;

  return (
    <div>
      <h2 className="text-xl underline underline-offset-1">papiko</h2>
      <ul>
        {slugs.slug ? slugs.slug.map((key,index)=>(
          <li key={`val_${index}`}>{key}</li>
        )) : <Link href="blood/umbrella/great/titanic">titanic</Link>}
      </ul>
    </div>
  );
}
