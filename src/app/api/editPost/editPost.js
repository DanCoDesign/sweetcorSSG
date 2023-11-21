import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { id } = req.query;
    const { title, content } = await req.json();
    console.log(title, content);
    await clientPromise();
    await Post.updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          title: title,
          content: content,
        },
      }
    );

    return NextResponse.json({ message: "Blog Post Created" }, { status: 201 });

  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "An error occurred while creating the blog post" }, { status: 500 }
    );
  }
};

// export async Post(req, res) => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("posts");
//     const { id } = req.query;
//     const { title, content } = req.body;

//     const post = await db.collection("posts").updateOne(
//       {
//         _id: ObjectId(id),
//       },
//       {
//         $set: {
//           title: title,
//           content: content,
//         },
//       }
//     );

//     res.json(post);
//   } catch (e) {
//     console.error(e);
//     throw new Error(e).message;
//   }
// };