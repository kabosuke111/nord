import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  searchParams: {[key:string]:string|string[]|undefined};
  params: {gloom: string}
}
export default function Home(props: Props) {
  
  return (
    <main>
      <p>baldish</p>
      <p>{props.searchParams.page}</p>
      <Link href="/gloom/wind">wind</Link>
      <Link href="/gloom/bolom/left/fate">fate</Link>
    </main>
  );
}
