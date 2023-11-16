"use client"
import { useState, useEffect } from "react";
import styles from "./blogPage.module.css";
import BlogFeatured from "./blogFeatured";
import CategoryList from "@/components/categoryList/CategoryList";
import Container from "@/components/Container";
import Join from "@/components/JoinUs/joinUs";
import Card from "../../components/card/Card";

export default function Posts() {
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
                setPosts(data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchData();
    }, []);

    let POST_PER_PAGE = 2;

    const sortedPosts = posts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


    const startIndex = POST_PER_PAGE * (currentPage - 1);
    const endIndex = startIndex + POST_PER_PAGE;
    const visiblePosts = sortedPosts.slice(0, endIndex);

    const hasNext = endIndex < sortedPosts.length;

    const loadMorePosts = () => {
        setCurrentPage((prevPage) => prevPage + 1);

    };

    return (

        <Container className="flex gap-x-8 flex-col">

            <BlogFeatured />

            {visiblePosts.length > 0 ? (
                <div className="py-16">
                    <h1 className={styles.title}> All Posts</h1>
                    <hr className="pb-8" />

                    {visiblePosts.map((item) => (
                        <Card item={item} key={item._id} withImage={true} />
                    ))}
                    <div className={styles.content}>
                        <button onClick={loadMorePosts} disabled={!hasNext} className="px-12 py-4 font-bold text-center text-main-color disabled:text-slate-500 bg-button-bg disabled:bg-slate-200 w-auto rounded-md ">

                            Load More
                        </button>
                    </div>
                </div>

            ) : (
                <h2 className="posts-body-heading">Ooops! No posts added so far</h2>
            )}

            <CategoryList />
            <Join />
        </Container>


    );
};

