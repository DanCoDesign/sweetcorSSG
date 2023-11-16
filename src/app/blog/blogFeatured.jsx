import Image from "next/image";
import BookAMeeting from "../../components/ActionButton";
import Link from "next/link";
import styles from "./blogPage.module.css";
export default function BlogFeatured() {
    return (
        <section className="basis-12/12 lg:basis-7/12">
            <div className={`${styles.container} dark:bg-[#2E3040]`}>
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
