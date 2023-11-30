import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.texts}>
          <h1 className={styles.title}>
            Better design for your digital products
          </h1>
          <p className={styles.desc}>
            Turning your ideas into reality. We bring together the teams from
            the global tech industry
          </p>
          <button className={styles.button}> See our works</button>
        </div>
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="imgage" />
      </div>
    </div>
  );
}
