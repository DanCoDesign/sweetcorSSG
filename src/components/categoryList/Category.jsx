import Image from "next/image";
import styles from "./categoryList.module.css";

const Category = ({ name, text, icon }) => {
    return (
        <section className={styles.category}>
            <div className={styles.icon} >
                {icon}
            </div>

            <h1 className={styles.title}>{name}</h1>
            <p className={styles.text}>{text}</p>



        </section>
    )
}


export default Category;