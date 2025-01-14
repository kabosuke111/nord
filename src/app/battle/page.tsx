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
      <Link className="inline-block text-white py-2 px-4 bg-green-600 rounded-xl duration-300 hover:bg-white hover:text-green-600" href="/battle/wind">wind</Link><br />
      <Link className="mt-3 inline-block text-white py-2 px-4 bg-green-600 rounded-xl duration-300 hover:bg-white hover:text-green-600" href="/battle/bolom/left/fate/hydra/grant">grant</Link>
    </main>
  );
}
