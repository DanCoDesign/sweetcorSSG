"use client"
import { useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./writePage.module.css"
import Container from "@/components/Container";
import UserInfo from "@/components/login/UserInfo";


const WritePage = () => {
    const { data: session } = useSession();
    const author = session?.user?.email;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            setError("All fields are necessary.");
            return;
        }
        try {
            const res = await fetch("api/addPost", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content,
                    author
                }),

            });
            if (res.ok) {
                setTitle("");
                setContent("");
                setError("");
                setMessage("Post added successfully");
            }
        } catch (errorMessage) {
            setError(errorMessage);
        }

    };



    return (
        <Container className="flex flex-col relative">
            <UserInfo prop={session?.user} />
            <form onSubmit={handleSubmit} className={styles.editor}>

                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="Title of the post"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea
                        name="content"
                        placeholder="Content of the post"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        cols={20}
                        rows={8}
                    />
                </div>
                <input className="hidden" value={author} />
                <div className="form-group">
                    <button type="submit" className="submit_btn">
                        Add Post
                    </button>
                </div>
            </form>

        </Container>
    )
}

export default WritePage;