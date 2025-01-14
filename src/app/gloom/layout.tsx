import type { Metadata } from "next";
import "@/app/globals.css";
import React from "react";
import LinksComponent from "../_clientComponent/_linkComponent/LinkComponent";

export const metadata: Metadata = {
  title: "Efter frukosten",
  description: "öppnar ingrid köksfönstret.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
        <header className="bg-slate-400 p-2 rounded-md mb-4 md:bg-black">
            <h2 className="text-stone-50 text-2xl">faks</h2>
        </header>
        <div className="bg-slate-100">
        {children}
        </div>
        <LinksComponent links="/" />
      </div>
  );
}
