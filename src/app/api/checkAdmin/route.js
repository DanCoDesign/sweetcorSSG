import { clientPromise } from "@/lib/mongodb";
import User from "@/models/user"; // Adjust the path as needed
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email query parameter is required" }, { status: 400 });
  }

  try {
    await clientPromise();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isAdmin = user.admin;
    return NextResponse.json({ isAdmin }, { status: 200 });

  } catch (error) {
    console.error('Error checking admin status:', error);
    return NextResponse.json(
      { message: "An error occurred while checking admin status" },
      { status: 500 }
    );
  }
};
