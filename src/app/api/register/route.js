import { clientPromise } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req) {
    try {
        const { email, password, admin } = await req.json();
        const hashedpassword = await bcrypt.hash(password, 10);
        await clientPromise();
        await User.create({ email: email, password: hashedpassword, admin: admin });

        return NextResponse.json({ message: "User Registered" }, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while registering user" }, { status: 500 }
        );
    }
}