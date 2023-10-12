import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import BookAMeeting from "../ActionButton";
import Link from "next/link";

const Featured = () => {
    return (
        <section className="basis-12/12 lg:basis-7/12">
            <h1 className={styles.title}>
                Featured Post
            </h1>
            <div className={styles.container}>
                <div className={styles.post}>
                    <div className={styles.imgContainer}>
                        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.detail}>
                            <span className={styles.date}>
                                By John Deo l Aug 23, 2021
                            </span>
                        </div>
                        <Link href="#" className={styles.postTitle}>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                        </Link>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    </div>
                    <BookAMeeting title="Read More >" />
                </div>
            </div>
        </section>
    );
};

export default Featured;