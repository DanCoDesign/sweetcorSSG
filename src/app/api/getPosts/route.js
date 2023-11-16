import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function GET(req, res) {

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }



  try {
    await clientPromise();
    const posts = await Post.find({}).limit(10);

    return NextResponse.json({ posts }, { status: 200 });

  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { message: "An error occurred while fetching posts" },
      { status: 500 }
    );
  }
};