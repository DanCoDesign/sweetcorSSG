// pages/api/approvePost.js
import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const { postId } = await req.json();

        // Connect to MongoDB
        await clientPromise();

        // Find the post by ID and update the approved field to true
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { approved: true },
            { new: true }
        );

        if (!updatedPost) {
            return NextResponse.json(
                { message: "Post not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Post approved successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error approving post:', error);
        return NextResponse.json(
            { message: "An error occurred while approving the post" },
            { status: 500 }
        );
    }
};
