import React from "react";
import styles from "./featured.module.css";
import DisplayPosts from "@/app/blog/displayPosts";
import BlogFeatured from "@/app/blog/blogFeatured";

const Featured = () => {
    return (
        <section className="basis-12/12 lg:basis-7/12">
            <BlogFeatured />
        </section>
    );
};

export default Featured;