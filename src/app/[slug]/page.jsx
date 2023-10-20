
import styles from "./singlePage.module.css";
import Image from "next/image";
import Link from "next/link";

import blogData from '../API.json'; // Importing dummy JSON data
import NextReading from "./nextreading";
import Join from "@/components/JoinUs/joinUs";

const SinglePage = async ({ params }) => {
    const { slug } = params;

    const item = blogData.posts[2];



    return (
        <main className={["dark:hover:bg-[#2E3040]", styles.container].join(" ")}>
            <div className={styles.infoContainer}>
                <div className={styles.date}>
                    Posted on {item.createdAt}
                </div>

                <Link href="#" className={styles.postTitle}>
                    <h1>{item.title}</h1>
                </Link>

                <div className={styles.category}>
                    Category:<h4 className="inline link underline decoration-dotted px-1">{item.catSlug}</h4>
                </div>

            </div>
            <div className={styles.imageContainer}>
                <Image src={item.img} alt="" layout="fill" className={styles.image} />
            </div>


            <div className={styles.contentContainer}>

                <p>{item.desc}</p>

                {/* <div className={styles.content}>
                    <div className={styles.post}>
                        {/* <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: item?.desc }}
                    />
                    </div>
                </div> 
                */}
            </div>
            <section className="pt-32 pb-16">
                <h2 className="pb-16">What to read next</h2>
                <NextReading nextslug={slug} />
            </section>
            <hr />
            <section className="flex">
                <Join />
            </section>

        </main >
    );
};

export default SinglePage;