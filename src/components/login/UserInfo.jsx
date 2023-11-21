"use client";

import { signOut } from "next-auth/react";

export default function UserInfo({prop}) {
    return (
        <div className="grid place-items-center">
            <div className="bg-zince-300/10 flex flex-col md:flex-row items-center space-y-4 md:space-x-4">

                <div className="p-3">
                    You are logged in with email <span className="font-bold">{prop?.email}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="px-12 py-4 font-bold text-center text-main-color bg-button-bg whitespace-nowrap">
                    <div className="flex justify-between items-center text-base">
                        Log Out

                    </div>

                </button>
            </div>
        </div >
    );
}