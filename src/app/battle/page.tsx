import Link from "next/link";
import React from "react";

export default function Home() {
  
  return (
    <main>
      <p>baldish</p>
      <Link className="inline-block text-white py-2 px-4 bg-green-600 rounded-xl duration-300 hover:bg-white hover:text-green-600" href="/battle/wind">wind</Link><br />
      <Link className="mt-3 inline-block text-white py-2 px-4 bg-green-600 rounded-xl duration-300 hover:bg-white hover:text-green-600" href="/battle/bolom/left/fate/hydra/grant">grant</Link>
    </main>
  );
}
