"use client";

import { signOut } from "next-auth/react";

export default function UserInfo({prop}) {
    return (
        <div className="grid place-items-center">
            <div className="bg-zince-300/10 flex flex-col md:flex-row items-center space-y-4 md:space-x-4">

                <div className="p-3">
                    You are logged in with: <span className="font-bold">{prop?.email}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="px-12 py-4 font-bold text-center rounded-md text-main-color border border-[#ffffff1a] border-gray-300 bg-gradient-to-b from-[#ffffff] to-[#f1f1f1] hover:border-[#ececec] hover:to-[#ececec] shadow-sm whitespace-nowrap">
                    <div className="flex justify-between items-center text-base">
                        Log Out

                    </div>

                </button>
            </div>
        </div >
    );
}