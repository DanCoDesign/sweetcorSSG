import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, content, author } = await req.json();
    await clientPromise();
    await Post.create({ title: title, content: content, author: author });

    return NextResponse.json({ message: "Blog Post Created" }, { status: 201 });

  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "An error occurred while creating the blog post" }, { status: 500 }
    );
  }
};