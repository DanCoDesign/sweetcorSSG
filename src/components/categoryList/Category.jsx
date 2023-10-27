import Image from "next/image";
import styles from "./categoryList.module.css";

const Category = ({ name, text, icon }) => {
    return (
        <section className={`${styles.category} dark:hover:bg-[#2E3040] dark:border dark:hover:border-solid dark:hover:border-[#2E3040]`}>
            <div className={styles.icon} >
                {icon}
            </div>

            <h1 className={styles.title}>{name}</h1>
            <p className={styles.text}>{text}</p>



        </section>
    )
}


export default Category;