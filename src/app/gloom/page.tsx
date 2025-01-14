import Link from "next/link";
import React from "react";

type SearchParams = {
  [key:string]:string|string[]|undefined
}

export default async function Home({searchParams}: {
  searchParams: Promise<SearchParams>
}) {
  
  const search = await searchParams;

  return (
    <main className="p-7">
      <div className="p-3 border border-slate-400 rounded-lg">
        <p className="mb-3">パラメータ</p>
      {
        search && Object.entries(search).map(([key, value])=>(
          <div key={key}>
            <p>{key}: {value?.toString()}</p>
          </div>
        ))
      }
      </div>
      <p className="my-4"><Link href="/gloom/wind" className="text-lg font-semibold underline">wind</Link></p>
      <p className="my-4"><Link href="/gloom/bolom/left/center?volvo=1900&quite=543&vintage=jijide&i=l" className="text-lg font-semibold underline">volvo</Link></p>
    </main>
  );
}
