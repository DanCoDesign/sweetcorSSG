"use client"
import { useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./writePage.module.css"
import Container from "@/components/Container";
import UserInfo from "@/components/login/UserInfo";
import WritePost from "./writing";
import GetMyPosts from "./getMyPosts";
import GetAdminRights from "./GetAdminRights";
import Link from "next/link";

const Dashboard = () => {
    const { data: session } = useSession();
    const [showWritePost, setShowWritePost] = useState(false);
    const [buttonText, setButtonText] = useState("New Post");
    const toggleButtonText = () => {
        setShowWritePost(!showWritePost);
        setButtonText((prevText) => (prevText === "New Post" ? "Cancel Writing" : "New Post"));
    };

    if (!session) {
        return (
            <Container className="flex flex-col items-center justify-center min-h-[calc(100vh-300px)] py-16 px-8 " >
                <h1 className="text-2xl font-bold py-2">You are not logged in</h1>
                <p>Please log in to access your dashboard.</p>
                <Link href="/login"
                    className="px-12 py-3 font-bold text-center text-main-color bg-button-bg w-auto rounded-md mt-8">
                    <div className="flex justify-between items-center text-base">
                        Go to Login
                    </div>
                </Link>
            </Container>
        );
    }
    return (
        <Container className="flex flex-col relative px-8 min-h-screen gap-8">


            <section className="flex flex-col mx-auto w-full">
                <h1>Dashboard</h1>
                <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
                    <UserInfo prop={session?.user} />
                    <button onClick={toggleButtonText}
                        className="px-12 py-4 font-bold text-center rounded-md text-main-color border border-[#ffD050] bg-gradient-to-t from-[#ffD050] to-[#f1f1f1] hover:border-[#ececec] hover:to-[#ececec] shadow-sm whitespace-nowrap w-[160px]">
                        <div className="flex justify-center text-base whitespace-nowrap">
                            {buttonText}
                        </div>
                    </button>
                </div>

                {showWritePost && <WritePost />}
            </section>

            <hr />

            <section className="mx-auto w-full">

                <GetAdminRights user={session?.user} />
            </section>

            <hr />

            <section className="mx-auto w-full ">

                <GetMyPosts user={session?.user} />
            </section>

        </Container>
    )
}

export default Dashboard;