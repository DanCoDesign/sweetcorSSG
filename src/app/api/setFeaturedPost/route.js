// pages/api/setFeaturedPost.js
import { clientPromise } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";
import mongoose from 'mongoose';

export const POST = async (req) => {
    try {
        const { postId } = await req.json();

        // Connect to MongoDB
        await clientPromise();

        // Ensure that only one post is featured at a time
        await Post.updateMany({}, { $set: { isFeatured: false } });

        // Set the selected post as featured
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { isFeatured: true },
            { new: true }
        );

        if (!updatedPost) {
            return NextResponse.json(
                { message: "Post not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Post set as featured successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error setting featured post:', error);
        return NextResponse.json(
            { message: "An error occurred while setting the featured post" },
            { status: 500 }
        );
    }
};
