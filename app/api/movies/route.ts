import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await prismadb.movie.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
