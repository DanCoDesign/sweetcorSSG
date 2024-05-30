"use client"
import styles from "./blogPage.module.css";
import BlogFeatured from "./blogFeatured";
import CategoryList from "@/components/categoryList/CategoryList";
import Container from "@/components/Container";
import Join from "@/components/JoinUs/joinUs";
import DisplayPosts from "./displayPosts";

export default function Posts() {
    return (

        <Container className="flex gap-x-8 flex-col px-8 md:px-0">
            <BlogFeatured />
            <h1 className={styles.title}> All Posts</h1>
            <hr className="pb-8" />
            <DisplayPosts numberOfPosts={3} withImage={true} loadmore={true} />

            <CategoryList />
            <Join />
        </Container>


    );
};

