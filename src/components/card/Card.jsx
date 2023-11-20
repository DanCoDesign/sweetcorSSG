import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ item, withImage }) => {
    return (
        <div className={`${styles.textContainer} dark:hover:bg-[#2E3040]`} key={item._id}>
            <Link href={`/posts/${item._id}`}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src={item.img} alt="" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.contentContainer}>
                    <div className={styles.category}>
                        {item.catSlug}
                        <span className={styles.date}>
                            {new Date(item.createdAt).toLocaleString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>


                    <h2>{item.title}</h2>

                    <p>{item.content}</p>
                </div>
            </Link>
        </div >
    );
}
export default Card;