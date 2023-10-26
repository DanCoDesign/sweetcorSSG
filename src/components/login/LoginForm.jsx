"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Email Address
                </label>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
            </div>

            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-400">
                        Password
                    </label>

                    <a
                        href="#!"
                        className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">
                        Forgot password?
                    </a>
                </div>

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
            </div>

            <div className="mb-6">
                <button

                    className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                    Sign in
                </button>
                {error && (
                    <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                        {error}
                    </div>
                )}
            </div>
            <p className="text-sm text-center text-gray-400">
                Don&apos;t have an account yet?{" "}
                <a
                    href={"/register"}
                    className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                    Sign up
                </a>
                .
            </p>
        </form>
    );
}