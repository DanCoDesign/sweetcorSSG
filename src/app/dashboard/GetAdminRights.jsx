"use client";
import { useEffect, useState } from "react";

export default function GetAdminRights({ user }) {
    const userToFetch = user ? user.email : '';
    const [showAdminRights, setShowAdminRights] = useState(false);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (userToFetch) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`/api/checkAdmin/?email=${userToFetch}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch admin rights');
                    }
                    const data = await response.json();
                    setShowAdminRights(data.isAdmin);
                } catch (error) {
                    console.error('Error fetching admin rights:', error);
                }
            };
            fetchData();
        }
    }, [userToFetch]);


    useEffect(() => {
        if (showAdminRights) {
            const fetchPosts = async () => {
                try {
                    const response = await fetch(`/api/getPosts`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch posts');
                    }
                    const data = await response.json();
                    setPosts(data.posts);
                    if (data.posts.length > 0) {
                        setSelectedPost(data.posts[0]._id); // Set the first post as default
                    }
                } catch (error) {
                    console.error('Error fetching posts:', error);
                }
            };
            fetchPosts();
        }
    }, [showAdminRights]);



    const handleSetFeaturedPost = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/setFeaturedPost`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId: selectedPost }),
            });

            if (response.ok) {
                setMessage('Featured post set successfully!');
            } else {
                setError('Failed to set featured post.');
            }
        } catch (error) {
            setError('Error setting featured post:', error);
        }
    };


    return (
        <>
            {showAdminRights ? (
                <div className="flex flex-col gap-4">
                    <h3>Set Feature Post</h3>
                    <p>Here you can change the featured post from Homepage and /blog. </p>
                    <form onSubmit={handleSetFeaturedPost} className="flex flex-col md:flex-row md:flex-wrap gap-4 items-center">
                        <label htmlFor="post-select">Select Post:</label>
                        <select
                            className="p-2 rounded-md bg-slate-200 dark:bg-slate-500"
                            id="post-select"
                            value={selectedPost}
                            onChange={(e) => setSelectedPost(e.target.value)}
                        >
                            {posts.map((post) => (
                                <option key={post._id} value={post._id}>
                                    {post.title}
                                </option>
                            ))}
                        </select>
                        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
                            Set as Featured
                        </button>
                        {message}
                        {error}
                    </form>
                </div>
            ) : (
                <div>No Admin Rights</div>
            )}
        </>
    );
}
