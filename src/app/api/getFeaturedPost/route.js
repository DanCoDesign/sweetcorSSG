// pages/api/getFeaturedPost.js
import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        // Connect to MongoDB
        await clientPromise();

        // Find the featured post
        const featuredPost = await Post.findOne({ isFeatured: true });

        if (!featuredPost) {
            return NextResponse.json(
                { message: "No featured post found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ post: featuredPost }, { status: 200 });

    } catch (error) {
        console.error('Error fetching featured post:', error);
        return NextResponse.json(
            { message: "An error occurred while fetching the featured post" },
            { status: 500 }
        );
    }
};
