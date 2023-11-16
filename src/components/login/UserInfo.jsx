"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo({prop}) {
    const { data: session } = useSession();

    return (
        <div className="grid place-items-center">
            <div className=" p-8 bg-zince-300/10 flex flex-row items-center ">

                <div className="p-3">
                    You are logged in with email <span className="font-bold">{prop?.email}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="px-12 py-4 font-bold text-center text-main-color bg-button-bg w-auto">
                    <div className="flex justify-between items-center text-base">
                        Sign Out

                    </div>

                </button>
            </div>
        </div >
    );
}