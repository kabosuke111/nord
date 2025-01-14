
import React from "react";

export default async function Home(
  {params, searchParams}: {
    params: Promise<{fight: string[]}>, 
    searchParams: Promise<{[key:string]:string|string[]|undefined}>
  }) {

  const fight = (await params).fight;
  const prm = await searchParams;

  return (
    <div>
      <h2 className="text-xl underline underline-offset-1">{fight}</h2>
      <p>鬼龍！</p>
      {prm && Object.entries(prm).map(([key, value])=>(
        <p key={key}>
          {key}: {value?.toString()}
        </p>
      ))}
    </div>
  );
}