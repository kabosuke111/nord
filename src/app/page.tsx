import {cache} from "react";
import Link from "next/link";
import LinksComponent from "./_clientComponent/_linkComponent/LinkComponent";

type List = {
  "id": number;
  "date": string;
  "genre": string;
  "title": string;
  "image": string;
  "link": string;
}

// type Sjukdom = {
//   konkurs: string;
// }

const datas = cache(async function() {
  const data: {lists: List[]} = await fetch("https://kabosuke.sakura.ne.jp/unknown/json/db.json").then((res)=>res.json());
  return data;
})

// const good = cache(async function() {
//   const mac: Sjukdom = await fetch('http://localhost:3000/api', {
//     'method':"POST",
//     'headers': {'Content-Type': 'application/json'},
//   }).then((res)=> res.json());

//   const abazure: string[] = Object.keys(mac);
//   const goes: string = abazure[0] + "：" + mac.konkurs;

//   return goes;
// })

type Best = [number, ...string[]]

export default async function Home() {
  const datalist = await datas();
  // const great = await good();

  const best: Best = [23, "be", "friend", "alerm"];


  return (
    <div>
      <p>{best[0]}</p>
      {datalist.lists.map((item)=>(
        <div key={item.id}>{item.id}:{item.title}</div>
      ))}
      <p>link öppnar</p>
      {/* <p className="text-rose-600">{great}</p> */}

      <ul>
        <li className="my-3"><Link href="/gloom" className="block p-2 px-3 border rounded-lg my-2">glooms</Link></li>
        <li className="my-3"><Link href="/battle" className="block p-2 px-3 border rounded-lg my-2">battle</Link></li>
        <li className="my-3"><Link href="/blood" className="block p-2 px-3 border rounded-lg my-2">blood</Link></li>
        <li className="my-3"><LinksComponent links="/" /></li>
        
      </ul>
    </div>
  );
}
