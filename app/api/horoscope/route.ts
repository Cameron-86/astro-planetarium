import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sign = searchParams.get("sign");
  const day = searchParams.get("day");

  if (!sign || !day) {
    return NextResponse.json(
      { error: "Missing 'sign' or 'day' parameter" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(
      `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=${day}`
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch horoscope data" },
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
