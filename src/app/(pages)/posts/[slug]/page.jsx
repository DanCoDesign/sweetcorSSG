
import styles from "./singlePage.module.css";
import Image from "next/image";
import Link from "next/link";
//import NextReading from "./nextreading";
import Join from "@/components/JoinUs/joinUs";

const getData = async (slug) => {

    const res = await fetch(process.env.NEXTAUTH_URL + `/api/posts/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const SinglePage = async ({ params }) => {
    const { slug } = params;

    const data = await getData(slug);



    return (
        <main className={[styles.container].join(" ")}>
            <div className={styles.infoContainer}>
                <div className={styles.date}>
                    Posted on {new Date(data.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>


                <h1>{data.title}</h1>


                {/* <div className={styles.category}>
                    Category:<h4 className="inline link underline decoration-dotted px-1">{data.catSlug}</h4>
                </div> */}

            </div>
            <div className={styles.imageContainer}>
                <Image src={data.img} alt="main image" layout="fill" className={styles.image} />
            </div>


            <div className={styles.contentContainer}>



                <div className={styles.content}>
                    <div className={styles.post}>
                        <div
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: data?.content }}
                        />
                    </div>
                </div>

            </div>
            {/* <section className="pt-32 pb-16">
                <h2 className="pb-16">What to read next</h2>
                 <NextReading nextslug={slug} /> 
            </section>*/}
            <hr />
            <section className="flex">
                <Join />
            </section>

        </main >
    );
};

export default SinglePage;