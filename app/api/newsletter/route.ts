import { NextResponse } from "next/server";

/** Isolated integration point. Connect a provider later. */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Newsletter provider is not connected yet." },
    { status: 501 }
  );
}
