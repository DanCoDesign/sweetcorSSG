"use client"
import styles from "./blogPage.module.css";
import { useEffect, useState } from "react";
import Card from "@/components/card/Card";

export default function BlogFeatured() {
    const [featuredPost, setFeaturedPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeaturedPost = async () => {
            try {
                const response = await fetch('/api/getFeaturedPost');
                if (!response.ok) {
                    throw new Error('Failed to fetch featured post');
                }
                const data = await response.json();
                setFeaturedPost(data.post);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedPost();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!featuredPost) return <div>No featured post available</div>;

    return (
        <section className="basis-12/12 lg:basis-7/12">
            <div className={`${styles.container} dark:bg-[#2E3040]`}>
                <div className={styles.post}>

                    <Card item={featuredPost} key={featuredPost._id} withImage={true} featured={true} />
                </div>

            </div>
        </section>
    );
}
