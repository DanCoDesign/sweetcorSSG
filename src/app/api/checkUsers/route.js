// Example implementation
import { clientPromise } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await clientPromise(); // Connect to your MongoDB database

        const usersCount = await User.countDocuments({});
        const usersExist = usersCount > 0;

        return NextResponse.json({ usersExist });
    } catch (error) {
        console.error("Error checking users:", error);

    }
}