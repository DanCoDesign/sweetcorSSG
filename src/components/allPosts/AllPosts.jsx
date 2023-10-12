
import styles from "./allposts.module.css";

import OnePost from "./OnePost";

const AllPosts = () => {
    return (
        <section className="basis-12/12 lg:basis-5/12">
            <div className={styles.title}>
                <h1>
                    All Posts
                </h1>
                <span className="link">View All</span>
            </div>
            <OnePost title="8 Figma design systems that you can download for free today." />
            <OnePost title="8 Figma design systems that you can download for free today." />
            <OnePost title="8 Figma design systems that you can download for free today." />
            <OnePost title="8 Figma design systems that you can download for free today." />
        </section>

    );
};

export default AllPosts;