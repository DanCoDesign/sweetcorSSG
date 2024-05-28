import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const { id, title, content, image, author } = await req.json();
    console.log(id);
    await clientPromise();
    const filter = { _id: id }
    await Post.findOneAndUpdate(
      filter,
      {
        title: title,
        content: content,
        img: image,
        author: author,

      }
    );

    return NextResponse.json({ message: "Blog Post Edited" }, { status: 201 });

  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "An error occurred while editing the blog post" }, { status: 500 }
    );
  }
};
