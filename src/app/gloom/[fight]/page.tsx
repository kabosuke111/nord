import React from "react";
import Link from "next/link";
import LinksComponent from "../../_clientComponent/_linkComponent/LinkComponent";

type Props = {
  searchParams: {[key:string]:string|string[]|undefined};
  params: {fight: string}
}
export default function Home({params,searchParams}: Props) {
  
  return (
    <div>
      <h2>{params.fight}</h2>
      <p>nest</p>
      <p>{searchParams.page}</p>
      <p>{searchParams.gone}</p>
      <Link href="/" >homme</Link>
      <LinksComponent links="/" />
    </div>
  );
}
