import Image from "next/image";
import styles from "./blogPage.module.css";
import DisplayPosts from "./displayPosts";
export default function BlogFeatured() {
    return (
        <section className="basis-12/12 lg:basis-7/12">
            <div className={`${styles.container} dark:bg-[#2E3040]`}>
                <div className={styles.post}>

                    <DisplayPosts numberOfPosts={1} withImage={false} featured={true} />
                  
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
        </section>
    );
};
