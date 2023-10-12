import styles from "./allposts.module.css";
import Link from "next/link";

const OnePost = ({ title, preview }) => {
    return (
        <div className={["dark:hover:bg-[#2E3040]", styles.textContainer].join(" ")}>
            <div className={styles.detail}>
                <span className={styles.date}>
                    By John Deo l Aug 23, 2021
                </span>
            </div>
            <Link href="#" className={styles.postTitle}>
                <h1>{title}</h1>
            </Link>
            <p>{preview}</p>
        </div >
    );
}
export default OnePost;