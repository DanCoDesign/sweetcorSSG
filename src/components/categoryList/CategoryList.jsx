import Link from "next/link";
import Category from "./Category";
import styles from "./categoryList.module.css";
import { Business, Startup, Economy, Technology } from "./categoriesIcons";

const CategoryList = () => {
    return (
        <section className={styles.main}>
            <h1 className={styles.header}>Choose A Category</h1>
            <div className="grid grid-cols-2 gap-8 w-full lg:grid-cols-4 my-12">
                <Link href="#">
                    <Category name="Business" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." icon={<Business />} />
                </Link>
                <Link href="#">
                    <Category name="Startup" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." icon={<Startup />} />
                </Link>
                <Link href="#">
                    <Category name="Economy" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." icon={<Economy />} />
                </Link>
                <Link href="#">
                    <Category name="Technology" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit." icon={<Technology />} />
                </Link>
            </div>


        </section>
    )
}


export default CategoryList;