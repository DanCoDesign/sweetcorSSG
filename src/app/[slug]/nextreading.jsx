
import styles from "./nextreading.module.css";
import Image from "next/image";
import Link from "next/link";
import blogData from '../API.json'; // Importing dummy JSON data

const NextReading = ({ nextslug }) => {


    const javascriptPosts = blogData.posts.filter(items => items.slug === nextslug);

    return (
        <section className="flex ">


            <div className="flex flex-col lg:flex-row gap-x-8 mx-auto">
                {javascriptPosts.map((items) => (
                    <div className="flex flex-col max-w-[405px]" key={items.slug}>
                        <div className={styles.previewimageContainer}>
                            <Image src={items.img} alt="" fill className={styles.previewimage} />
                        </div>
                        <div className={styles.contentContainer}>
                            <div className={styles.category}>
                                Posted on
                                <span className="link px-1">
                                    {items.createdAt}
                                </span>in
                                <Link href={nextslug}><span className="link underline decoration-dotted px-1 ">{items.catSlug}</span></Link>
                            </div>

                            <Link href="#" className={styles.postTitle}>
                                <h3>{items.title}</h3>
                            </Link>
                            <p>{items.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}

export default NextReading;