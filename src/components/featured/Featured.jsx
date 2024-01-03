import React from "react";
import styles from "./featured.module.css";
import DisplayPosts from "@/app/blog/displayPosts";

const Featured = () => {
    return (
        <section className="basis-12/12 lg:basis-7/12">
            <h1 className={styles.title}>
                Featured Post
            </h1>
            <div className={styles.container}>
            <DisplayPosts numberOfPosts={1} withImage={true} featured={true} />
               
            </div>
        </section>
    );
};

export default Featured;