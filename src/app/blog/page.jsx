// 'use client'
// import { useState } from "react";
import styles from "./blogPage.module.css";
import BlogFeatured from "./blogFeatured";
import CategoryList from "@/components/categoryList/CategoryList";
import Container from "@/components/Container";
import Join from "@/components/JoinUs/joinUs";
import Pagination from "@/components/pagination/Pagination";

import Card from "../../components/card/Card";
import blogData from '../API.json';

export async function getServerSideProps() {
    try {
        let response = await fetch('api/getPosts');
        let posts = await response.json();
        console.log(posts + "avem");
        return {
            props: { posts: JSON.parse(JSON.stringify(posts)) },
        };
    } catch (e) {
        console.error(e);
    }
}

export default function Posts( posts ) {

    
    const handleDeletePost = async (postId) => {
        try {
            let response = await fetch(
                "api/deletePost?id=" + postId,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                }
            );
            response = await response.json();
            window.location.reload();
        } catch (error) {
            console.log("An error occurred while deleting ", error);
        }
    };

    // const count = 12;

    // const POST_PER_PAGE = 4;

    // const hasPrev = POST_PER_PAGE * (posts - 1) > 0;
    // const hasNext = POST_PER_PAGE * (posts - 1) + POST_PER_PAGE < count;

    // const limitposts = blogData.posts.slice(0, POST_PER_PAGE);
    return (
      
       <Container className="flex gap-x-8 flex-col">

            <BlogFeatured />

            {posts.length > 0 ? (
                <ul className="posts-list">
                    {posts.map((post, index) => {
                        return (
                            <li key={index} className="post-item">
                                <div className="post-item-details">
                                    <h2>{post.title}</h2>

                                    <p>{post.content}</p>
                                </div>
                                <div className="post-item-actions">
                                    <a href={`/posts/${post._id}`}>Edit</a>
                                    <button onClick={() => handleDeletePost(post._id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <h2 className="posts-body-heading">Ooops! No posts added so far</h2>
            )}
            {/* <div className="py-16">
                <h1 className={styles.title}>{cat} All Posts</h1>
                <hr className="pb-8" />
                <div className={styles.content}>
                    {limitposts?.map((item) => (
                        <Card item={item} key={item._id} withImage={true} />
                    ))}
                    <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
                </div>
            </div> */}
            <CategoryList />
            <Join />
        </Container>


    );
};

