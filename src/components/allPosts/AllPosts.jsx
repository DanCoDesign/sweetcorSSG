
import styles from "./allposts.module.css";
import Link from "next/link";

import DisplayPosts from "@/app/(pages)/blog/displayPosts";

const AllPosts = () => {
    return (
        <section className="basis-12/12 lg:basis-5/12">
            <div className={styles.title}>
                <h1>
                    All Posts
                </h1>
                <Link href={`/blog`} className="link"><span >View All</span></Link>
            </div>

            <DisplayPosts numberOfPosts={3} withImage={false} loadmore={false} />
        </section>

    );
};

export default AllPosts;