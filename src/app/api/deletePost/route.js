import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    await clientPromise();
    const { id } = req.json();
    console.log(id);
    const post = await Post.deleteOne({
      _id: ObjectId(id),
    });

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { message: "An error occurred while deleting post" },
      { status: 500 }
    );
  }
};