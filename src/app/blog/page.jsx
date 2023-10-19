import styles from "./blogPage.module.css";
import Image from "next/image";
import BookAMeeting from "../../components/ActionButton";
import Link from "next/link";

import CategoryList from "@/components/categoryList/CategoryList";
import Container from "@/components/Container";
import Join from "@/components/JoinUs/joinUs";
import Pagination from "@/components/pagination/Pagination";

import Card from "../../components/card/Card";
import blogData from '../API.json'; // Importing dummy JSON data


const BlogFeatured = () => {
    return (
        <section className="basis-12/12 lg:basis-7/12">
            <div className={styles.container}>
                <div className={styles.post}>

                    <div className={styles.textContainer}>
                        <div className={styles.detail}>
                            <span className={styles.slug}>
                                Featured Post
                            </span>
                        </div>
                        <Link href="#" className={styles.postTitle}>
                            <h2>Step-by-step guide to choosing great font pairs</h2>
                        </Link>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <BookAMeeting title="Read More >" />
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
        </section>
    );
};

const BlogPage = ({ searchParams }) => {

    const page = blogData.posts.length || 1;
    const { cat } = searchParams;

    const { posts, count } = 12;

    const POST_PER_PAGE = 4;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    const limitposts = blogData.posts.slice(0, POST_PER_PAGE);
    return (
        <Container className="flex gap-x-8 flex-col mb-[96px]">

            <BlogFeatured />
            <div className="py-16">
                <h1 className={styles.title}>{cat} All Posts</h1>
                <hr className="pb-8" />
                <div className={styles.content}>
                    {limitposts?.map((item) => (
                        <Card item={item} key={item._id} withImage={true} />
                    ))}
                    <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
                </div>
            </div>
            <CategoryList />
            <Join />
        </Container>


    );
};

export default BlogPage;