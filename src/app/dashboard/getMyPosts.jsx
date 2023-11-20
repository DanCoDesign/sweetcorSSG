"use client"
import { useState, useEffect } from "react";
import Card from "../../components/card/Card";

export default function GetMyPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getPosts');
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
    }, []);

    const handleDeletePost = async (postId) => {
        console.log(postId);
        try {
            const response = await fetch('/api/deletePost', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: postId }),
            });

            if (response.ok) {

                console.log('Post deleted successfully');
            } else {

                console.error('Error deleting post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const sortedPosts = posts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <>
            {sortedPosts.length > 0 ? (
                <>
                    {
                        sortedPosts.map((item) => (
                            <div className="flex flex-row align-middle" key={item._id}>
                                <Card item={item} />
                                <button onClick={() => handleDeletePost(item._id)}>Delete</button>
                            </div>

                        ))
                    }


                </>

            ) : (
                <h2 className="posts-body-heading">No posts added so far</h2>
            )
            }
        </>
    );
};

