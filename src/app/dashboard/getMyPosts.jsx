"use client"
import { useState, useEffect, useRef } from "react";
import Card from "../../components/card/Card";
import EditPost from "./editing";

export default function GetMyPosts({ user }) {
    const userToFetch = user ? user.email : '';
    const [posts, setPosts] = useState([]);
    const [showWritePost, setShowWritePost] = useState(false);
    const [postToEdit, setPostToEdit] = useState(null);
    const editingRef = useRef(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/getPosts/?author=${userToFetch}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, [userToFetch]);

    const handleEditPost = (postId) => {
        const post = posts.find((item) => item._id === postId);
        if (post) {
            setPostToEdit(post);
            setShowWritePost(true);
            setTimeout(() => {
                if (editingRef.current) {
                    editingRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };


    const sortedPosts = posts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <>
            {sortedPosts.length > 0 ? (
                <>
                    <h2>My Posts</h2>
                    {sortedPosts.map((item) => (
                        <div className="flex flex-row align-middle px-4 my-8" key={item._id}>
                            <Card item={item} />
                            <button
                                onClick={() => handleEditPost(item._id)}
                                className="text-main-color rounded-md bg-button-bg inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium  hover:bg-gray-300 my-auto"
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </>
            ) : sortedPosts.length === 0 ? (
                <h2 className="my-10">You have no posts yet</h2>
            ) : (
                <h2 className="my-10">Loading Posts...</h2>
            )}
            <hr />
            {showWritePost && (
                <div id="editing" className="my-8" ref={editingRef}>
                    <EditPost post={postToEdit} />
                </div>
            )}
        </>
    );
};

