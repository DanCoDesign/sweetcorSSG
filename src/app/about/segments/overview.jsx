"use client"
import { useState, useEffect } from 'react'
import styles from "../about.module.css"
const herobg = {
    backgroundImage:
        "url('./teamPhoto.png')",

};
const Counter = ({ endValue, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const step = endValue > 1000 ? 1000 : 1;
        const speed = endValue > 1000 ? 60 : 100;

        const interval = setInterval(() => {
            setCount((prevCount) => Math.min(prevCount + step, endValue));

            if (count === endValue) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [endValue, count]);

    return (
        <div className="flex-item p-4">
            <h3 className={styles.h3}>{endValue > 1000 ? count / 1000 + "K" : count}+</h3>
            <p>{label}</p>
        </div>
    );
};
export default function Overview() {

    return (
        <section style={herobg} className={styles.bg_img} >
            <div className="lg:px-20 flex flex-col flex-start">

                <div className="flex flex-col md:flex-row items-center px-8 bg-opacity-75 md:bg-opacity-100 bg-[#FFD050] justify-evenly max-w-md lg:max-w-xl">
                    <Counter endValue={12} label="Blogs Published" />
                    <Counter endValue={18000} label="Views on Finsweet" />
                    <Counter endValue={30000} label="Total active Users" />

                </div>
                <div className="flex w-full h-6 ">
                    <div className="bg-purple-700 bg-opacity-75 md:bg-opacity-100 w-full"></div>
                    <div className="bg-[#FFD050] bg-opacity-75 md:bg-opacity-100 w-full"></div>
                    <div className="bg-[#FFD050] bg-opacity-75 md:bg-opacity-100 w-full"></div>
                    <div className="bg-transparent w-full"></div>
                </div>
            </div>
        </section>
    )
}