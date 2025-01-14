import Image from "next/image";
import React from "react";
import Link from "next/link";
import LinksComponent from "../../../../_clientComponent/_linkComponent/LinkComponent";

type Props = {
  searchParams: {[key:string]:string|string[]|undefined};
  params: {fight: string[]}
}
export default function Home({params,searchParams}: Props) {
  
  return (
    <div>
      <h2 className="text-xl underline underline-offset-1">
        <span>{params.fight[0]}</span>
        <span>{params.fight[1]}</span>
        {params.fight[2]}</h2>
      <p>every</p>
      <Link href="/" >homme</Link>
      <LinksComponent links="/" />
    </div>
  );
}
