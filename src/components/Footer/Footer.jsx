import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footerText}>@2023 Next Full Stack</div>
      <div className={styles.images}>
        <Image src="/1.png" width={20} height={20} className={styles.icon} />
        <Image src="/2.png" width={20} height={20} className={styles.icon} />
        <Image src="/3.png" width={20} height={20} className={styles.icon} />
        <Image src="/4.png" width={20} height={20} className={styles.icon} />
      </div>
    </div>
  );
}

export default Footer;
