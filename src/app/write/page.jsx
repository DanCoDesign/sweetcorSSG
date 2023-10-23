"use client"
import { useState } from "react";
import styles from "./writePage.module.css"
import Container from "@/components/Container";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


const WritePage = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <Container className="flex flex-col relative">
            <input type="text" placeholder="Title" />
            <div className={styles.editor}>
                <div className={styles.editor}>
                    <button className={styles.button} onClick={() => setOpen(!open)}>
                        <Image src="/plus.png" alt="" width={16} height={16} />
                    </button>
                    {open && (
                        <div className={styles.add}>
                            <input
                                type="file"
                                id="image"
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                            <button className={styles.addButton}>
                                <label htmlFor="image">
                                    <Image src="/image.png" alt="" width={16} height={16} style={{ color: '#FFF' }} />
                                </label>
                            </button>
                            <button className={styles.addButton}>
                                <Image src="/external.png" alt="" width={16} height={16} />
                            </button>
                            <button className={styles.addButton}>
                                <Image src="/video.png" alt="" width={16} height={16} />
                            </button>
                        </div>
                    )}
                    <ReactQuill
                        className={styles.textArea}
                        theme="bubble"
                        value={value}
                        onChange={setValue}
                        placeholder="Tell your story..."
                    />
                </div>
            </div>
        </Container>
    )
}

export default WritePage;