import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const keys = Array.from(searchParams.keys());
  const author = searchParams.get("author");

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (keys[0] === 'author') { //get author posts for dashboard

    try {

      await clientPromise();
      const posts = await Post.find({ author: author });
      console.log(posts);
      return NextResponse.json({ posts }, { status: 200 });

    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json(
        { message: "An error occurred while fetching posts" },
        { status: 500 }
      );
    }
  }
  else {    //get all posts for blog page
    try {

      await clientPromise();
      const posts = await Post.find({});
      return NextResponse.json({ posts }, { status: 200 });

    } catch (error) {
      console.error('Error fetching posts:', error);
      return NextResponse.json(
        { message: "An error occurred while fetching posts" },
        { status: 500 }
      );
    }
  }

};