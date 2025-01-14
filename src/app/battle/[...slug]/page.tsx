import React from "react";

type Params = {
  slug: string[]
}
export default async function Home({params}: {params: Promise<Params>}) {
  const slugs = await params;
  
  return (
    <div>
      <h2 className="text-xl underline underline-offset-1">{slugs.slug[4]?slugs.slug[4]:"フザぼけ"}</h2>
      <ul>
        {slugs.slug.map((key,index)=>(
          <li key={`val_${index}`}>{key}</li>
        ))}
      </ul>
    </div>
  );
}
