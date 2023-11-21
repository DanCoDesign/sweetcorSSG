"use client"
import { useState, useEffect } from "react";
import Card from "../../components/card/Card";

export default function GetMyPosts({ user }) {
    const userToFetch = user ? user.email : '';
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/getPosts/?author=${userToFetch}`);
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
    }, [user]);

    // const handleEditPost = async (postId) => {
    //     e.preventDefault();
    //     console.log(postId);
    //     try {
    //         const response = await fetch(`/api/deletePost?postID=${postId}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 title,
    //                 content,
    //             }),
    //         });

    //         if (response.ok) {

    //             console.log('Post deleted successfully');
    //         } else {

    //             console.error('Error deleting post');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    const sortedPosts = posts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <>
            {sortedPosts.length > 0 ? (
                <>
                    {
                        sortedPosts.map((item) => (
                            <div className="flex flex-row align-middle px-4 my-8" key={item._id}>
                                <Card item={item} />
                                <button onClick={() => handleEditPost(item._id)} className="text-main-color bg-button-bg inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium hover:text-button-bg hover:bg-gray-500 my-auto">Edit</button>
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

