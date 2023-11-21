"use client"
import { useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./writePage.module.css"
import Container from "@/components/Container";
import UserInfo from "@/components/login/UserInfo";
import WritePost from "./writing";
import GetMyPosts from "./getMyPosts";


const Dashboard = () => {
    const { data: session } = useSession();

    return (
        <Container className="flex flex-col relative">
            <h1 className={styles.title}>Dashboard</h1>
            <UserInfo prop={session?.user} />

            <section>
                <h2>My Posts</h2>
                <GetMyPosts user={session?.user} />
            </section>

            <WritePost />
        </Container>
    )
}

export default Dashboard;