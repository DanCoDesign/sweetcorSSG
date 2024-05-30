import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import BookAMeeting from "../ActionButton";

const Card = ({ item, withImage, featured, homepage }) => {
    return (
        <div className={`${featured ? `${styles.featuredContainer}` : `${styles.textContainer} dark:hover:bg-[#2E3040]`}`} key={item._id}>
            {homepage &&
                <div className='flex space-x-4 items-start  py-16 flex-col'>
                    <div className={styles.featuredimageContainer}>
                        <Link href={`/posts/${item._id}`}>
                            <Image src={item.img} alt="" fill className={styles.image} />
                        </Link>
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.category}>
                            {item.catSlug}
                            <span className={styles.date}>
                                {new Date(item.createdAt).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </div>

                        <Link href={`/posts/${item._id}`}>
                            <h2>{item.title}</h2>
                        </Link>
                        <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: item?.content.slice(0, 400) }}></p>
                        <div className="flex my-8">
                            <BookAMeeting title="Read More >" link={`/posts/${item._id}`} />
                        </div>
                    </div>
                </div>
            }
            {!homepage &&
                <Link href={`/posts/${item._id}`} className={`flex space-x-4 items-start ${featured ? 'flex-row-reverse gap-14' : ''}`}>
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

                        <p className="line-clamp-2" dangerouslySetInnerHTML={{ __html: item?.content.slice(0, 200) }}></p>
                        {featured && <div className="flex my-8"><BookAMeeting title="Read More >" link={`/posts/${item._id}`} /></div>}
                    </div>
                </Link>
            }


        </div>
    );
}
export default Card;