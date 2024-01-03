import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import BookAMeeting from "../ActionButton";

const Card = ({ item, withImage, featured }) => {
    return (
        <div className={`${featured ? `${styles.featuredContainer}` : `${styles.textContainer} dark:hover:bg-[#2E3040]`}`} key={item._id}>
            <Link href={`/posts/${item._id}`} className={`flex space-x-4 items-start ${featured ? 'flex-col' : ''}`}>
                {withImage && (
                    featured ? (
                        <div className={styles.featuredimageContainer}>
                            <Image src={item.img} alt="" fill className={styles.image} />
                        </div>
                    ) : (
                        <div className={styles.imageContainer}>
                            <Image src={item.img} alt="" fill className={styles.image} />
                        </div>
                    )
                )}

                <div className={styles.contentContainer}>
                    <div className={styles.category}>
                        {item.catSlug}
                        <span className={styles.date}>
                            {new Date(item.createdAt).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>


                    <h2>{item.title}</h2>

                    {withImage ? (<p>{item.content.split(' ').slice(0, 40).join(' ')}...</p>) : (<p>{item.content.split(' ').slice(0, 20).join(' ')}...</p>)}
                </div>
            </Link>
            <div className="flex">{featured && (<BookAMeeting title="Read More >" link={`/posts/${item._id}`} />)}</div>
            
        </div>
    );
}
export default Card;