import React from "react";
import Link from "next/link";
import LinksComponent from "../../_clientComponent/_linkComponent/LinkComponent";

export default async function Home({params, searchParams}: {
  params: Promise<{fight: string[]}>, 
  searchParams: Promise<{[key:string]:string|string[]|undefined}>
}) {

  const fight = (await params).fight;
  const prm = await searchParams;
  
  return (
    <div>
      <h2>{fight}</h2>
      <p>nest</p>
      <p>{prm.page}</p>
      <p>{prm.gone}</p>
      <Link href="/" >homme</Link>
      <LinksComponent links="/" />
    </div>
  );
}
