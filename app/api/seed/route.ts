import { MOVIESEEDING } from "@/data/dbmeta";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async () => {

  try {
    await prismadb.movie.createMany({
      data: MOVIESEEDING,
    });

    return NextResponse.json({ status: "Successfully" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: "Unsuccessfully" }, { status: 500 });
  }
}

