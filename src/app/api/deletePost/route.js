import { clientPromise } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

export async function DELETE(req, res) {
   

    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    try {
        const { id } = req.body;
        
        const result = await clientPromise();
       
        if (result) {
            return NextResponse.json({ success: true }, { status: 200 });
        }
        // const result = await Post.deleteOne({ _id: ObjectId(id) });
        // if (result.deletedCount === 1) {
        //     return NextResponse.json({ success: true }, { status: 200 });
        // } else {
        //     return NextResponse.json(
        //         { message: 'Post not found or not deleted' },
        //         { status: 404 }
        //     );
        // }
    } catch (error) {
        console.error('Error deleting post:', error);
    }
}