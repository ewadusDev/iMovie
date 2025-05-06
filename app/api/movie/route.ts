import { minioClient } from "@/lib/db";
import prismadb from "@/lib/prismadb";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { id } = await req.json();
  try {
    const getVideoPath = await prismadb.movie.findUnique({
      where: {
        id,
      },
    });
    if (!getVideoPath) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    const url = await minioClient(getVideoPath.videoUrl);
    return NextResponse.json({ url, getVideoPath }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
