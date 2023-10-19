
import styles from "./allposts.module.css";
import Link from "next/link";

import blogData from '../../app/API.json'; // Importing dummy JSON data

const AllPosts = () => {

    const POST_PER_PAGE = 6;

    const limitPosts = blogData.posts.slice(0, POST_PER_PAGE);
    return (
        <section className="basis-12/12 lg:basis-5/12">
            <div className={styles.title}>
                <h1>
                    All Posts
                </h1>
                <span className="link">View All</span>
            </div>
            {limitPosts?.map((item) => (
                <div className={["dark:hover:bg-[#2E3040]", styles.textContainer].join(" ")} key={item.id}>
                    <div className={styles.contentContainer}>
                        <div className={styles.category}>
                            {item.catSlug}

                            <span className={styles.date}>
                                {item.createdAt}
                            </span>
                        </div>

                        <Link href="#" className={styles.postTitle}>
                            <h4>{item.title}</h4>
                        </Link>
                    </div>

                </div >
            ))}
        </section>

    );
};

export default AllPosts;