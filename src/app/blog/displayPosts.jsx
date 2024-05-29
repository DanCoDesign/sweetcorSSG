"use client"
import { useState, useEffect, Children } from "react";
import styles from "./blogPage.module.css";
import Card from "../../components/card/Card";
import PostsSkeleton from "@/components/skeleton/PostsSkeleton";

export default function DisplayPosts({ numberOfPosts, withImage, loadmore, featured }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getPosts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                const approvedPosts = data.posts.filter(post => post.approved === true);
                setPosts(approvedPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, []);

    const sortedPosts = posts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const startIndex = numberOfPosts * (currentPage - 1);
    const endIndex = startIndex + numberOfPosts;
    const visiblePosts = sortedPosts.slice(0, endIndex);
    const hasNext = endIndex < sortedPosts.length;

    const loadMorePosts = () => {
        setCurrentPage((prevPage) => prevPage + 1);

    };

    return (
        <>
            {visiblePosts.length > 0 ? (
                <>
                    {
                        visiblePosts.map((item) => (
                            <div className="flex py-6">
                                <Card item={item} key={item._id} withImage={withImage} featured={featured} homepage={false} />
                            </div>
                        ))
                    }
                    {
                        loadmore &&
                        (
                            <div className={styles.content}>
                                <button onClick={loadMorePosts} disabled={!hasNext} className="px-12 py-4 font-bold text-center text-main-color disabled:text-slate-500 bg-button-bg disabled:bg-slate-200 w-auto rounded-md ">

                                    Load More
                                </button>
                            </div>
                        )
                    }

                </>

            ) : (
                <><PostsSkeleton /> <PostsSkeleton /> <PostsSkeleton /></>
            )
            }
        </>
    );
};

