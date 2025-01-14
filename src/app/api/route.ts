import { NextResponse } from "next/server";

export async function GET() {
    return new NextResponse("nittio")
}

export async function POST(request: Request) {
    return NextResponse.json({"konkurs": "ett folk"});

    //routehandlerの処理に何らかのエラーが含まれている場合、第二引数にステータスコードを指定可能
    //return NextResponse.json({message: "none"}, {status: 401});
}