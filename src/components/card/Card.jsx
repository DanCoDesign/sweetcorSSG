import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ key, item, withImage }) => {
    return (
        <div className={["dark:hover:bg-[#2E3040]", styles.textContainer].join(" ")} key={key}>

            {withImage && (
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt="" fill className={styles.image} />
                </div>
            )}
            <div className={styles.contentContainer}>
                <div className={styles.category}>
                    {item.catSlug}
                    <span className={styles.date}>
                        {item.createdAt}
                    </span>
                </div>

                <Link href="#" className={styles.postTitle}>
                    <h2>{item.title}</h2>
                </Link>
                <p>{item.desc}</p>
            </div>

        </div >
    );
}
export default Card;