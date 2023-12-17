
import styles from "../about.module.css"
export default function AboutHeader() {

    return (
        <section className="flex flex-col lg:flex-row items-center bg-transparent">
            <div className="p-8 lg:p-16 bg-white dark:bg-[#052825]">
                <span className="uppercase">About Us</span>
                <h1 className={styles.h1}>We are a team of content writers who share their learnings</h1>
            </div>
            <p className="p-8 bg-transparent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
    )
}