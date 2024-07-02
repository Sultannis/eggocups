import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src="/images/tenga-egg.svg"
                    alt="Tenga Egg"
                    width={360}
                    height={360}
                />
            </div>
            <h3 className={styles.title}>Tenga egg</h3>
            <p className={styles.text}>9.99 usd/pcs</p>
        </div>
    );
}