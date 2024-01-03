import BookAMeeting from "../ActionButton.jsx";
import styles from "./why.module.css";
import { LogoIpsum1, LogoIpsum2, LogoIpsum3, LogoIpsum4, LogoIpsum5 } from "./featuredIcons";

const Why = () => {
    return (
        <section className="w-full my-8">
            <div className={styles.bg}> </div>
            <div className={`${styles.maincontent} dark:bg-[#2E3040]`}>
                <span className={styles.span}>Why we started</span>
                <h1 className={styles.h1}>It started out as a simple idea and evolved into our passion</h1>
                <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <BookAMeeting title="Discover our story >" link={`/register`} />
            </div>
            <div className={styles.featured}>
                <div className={styles.firstcolumn}>
                    <span>We are</span>
                    <h4>Featured in</h4>
                </div>

                <LogoIpsum1 />
                <LogoIpsum2 />
                <LogoIpsum3 />
                <LogoIpsum4 />
                <LogoIpsum5 />

            </div>
        </section>
    );
}


export default Why;