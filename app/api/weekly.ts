import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sign = searchParams.get("sign");

  if (!sign) {
    return NextResponse.json(
      { error: "Missing 'sign' parameter" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/weekly?sign=${sign}`
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch weekly data" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
