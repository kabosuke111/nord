"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
    links: string;
}

export default function LinksComponent(props: Props) {
    
    const falls = useRouter();
    return(
        <div className="bg-indigo-900 flex align-middle p-4 pl-6">
            <div><Link href={props.links} className="block p-2 px-3 border rounded-lg my-2 bg-slate-50 border-slate-500 mr-4">nextのLinkコンポーネント / home</Link></div>
            <button className="block p-2 px-3 border rounded-lg my-2 bg-slate-50 border-slate-500 mr-4" onClick={()=>falls.push(props.links)}>useRouter / home</button>
            <button className="block p-2 px-3 border rounded-lg my-2 bg-slate-50 border-slate-500" onClick={()=>falls.back()}>en bak</button>
        </div>
    )
}