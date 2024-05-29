"use client"
import { useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./writePage.module.css"

const EditPost = ({ post }) => {
    const { data: session } = useSession();
    const author = session?.user?.email;
    const [title, setTitle] = useState(post?.title || "");
    const [content, setContent] = useState(post?.content || "");
    const [image, setImage] = useState(post?.img || "");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const id = post?._id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content || !image) {
            setError("All fields are necessary.");
            return;
        }
        try {
            const res = await fetch("api/editPost", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    title,
                    content,
                    image,
                    author,
                }),

            });
            if (res.ok) {
                setTitle("");
                setContent("");
                setError(null);
                setImage("");
                setMessage("Post edited successfully");

                // Delay for 1.5 seconds before refreshing the page
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } else {
                const errorData = await res.json();
                setError(errorData.message);
            }
        } catch (errorMessage) {
            setError(errorMessage);
        }

    };

    const handleRandomImage = () => {
        const randomId = Math.floor(Math.random() * 30) + 1;
        setImage(`https://picsum.photos/id/${randomId}/1200/900`);
    };

    return (
        <>
            <h2> Edit Away, Then Smash That Submit Button!</h2>


            <form onSubmit={handleSubmit} className={styles.editor}>

                <div className={styles['form-group']}>
                    <label className={styles.label}>Title</label>
                    <input className={styles.input}
                        type="text"
                        placeholder="Title of the post"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title || ''}
                    />
                </div>
                <div className={styles['form-group']}>
                    <label className={styles.label}>Content</label>
                    <textarea className={styles.textarea}
                        name="content"
                        placeholder="Content of the post"
                        value={content || ''}
                        onChange={(e) => setContent(e.target.value)}
                        cols={20}
                        rows={8}
                    />
                </div>
                <div className={styles['form-group']}>
                    <div className="flex w-full items-center space-x-2">
                        <label className={styles.label}>Image: </label>
                        <input className={styles.imageInput}
                            type="text"
                            placeholder="Link to the image you want to display"
                            onChange={(e) => setImage(e.target.value)}
                            value={image || ''}
                        />
                        <div className={styles.randombtn} onClick={handleRandomImage}>Random Image</div>
                    </div>

                </div>
                <input className={styles.hidden} value={author} readOnly />
                <div className={styles['form-group']}>
                    <button type="submit" className={styles.submit_btn}>
                        Submit
                    </button>
                    {message}
                    {error}
                </div>
            </form>
        </>
    )
}

export default EditPost;