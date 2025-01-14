import React from "react";

type Props = {
  params: {slug: string[]}
}
export default function Home({params}: Props) {
  
  return (
    <div>
      <h2 className="text-xl underline underline-offset-1">{params.slug[4]?params.slug[4]:"フザぼけ"}</h2>
      <ul>
        {params.slug.map((key,index)=>(
          <li key={`val_${index}`}>{key}</li>
        ))}
      </ul>
    </div>
  );
}
