import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const { slug } = params;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  try {
    console.log(slug);
    await clientPromise();
    const post = await Post.findOne({
      _id: new ObjectId(slug),
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));

  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { message: "An error occurred while fetching posts" },
      { status: 500 }
    );
  }
};