import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.webp" fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            asperiores quibusdam totam atque numquam illo nostrum sunt odio
            explicabo voluptatum dicta, corporis hic quae exercitationem. Nemo
            doloribus amet distinctio itaque.
            <br />
            <br />
            Voluptatem natus odit vero voluptatibus deleniti? Facere consectetur
            voluptatum accusamus pariatur quasi totam cupiditate rerum
            doloremque debitis, beatae necessitatibus alias? Ducimus ab fuga
            natus ipsum, minus nisi voluptatibus debitis expedita? Distinctio
            veniam a molestiae natus numquam est commodi ad. <br />
            <br /> Animi praesentium inventore, earum aliquid omnis quibusdam
            numquam molestias! Quam quod quasi at ea modi ipsum consequuntur
            veniam ducimus nemo ipsam! Maiores quidem animi praesentium
            voluptate nemo corporis alias iure nulla nostrum tempora voluptatum
            vero inventore nisi, ex amet quasi? Sapiente placeat corporis quae
            mollitia error totam. <br />
            <br /> Voluptates odit cumque consequuntur. Quidem debitis aliquid
            itaque culpa facilis. Quae animi saepe iusto! Quisquam excepturi
            harum sequi reiciendis assumenda dolor maiores, repellat, veniam
            pariatur vero quia neque sunt dignissimos beatae provident nihil
            minima?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            asperiores quibusdam totam atque numquam illo nostrum sunt odio
            explicabo voluptatum dicta, corporis hic quae exercitationem. Nemo
            doloribus amet distinctio itaque. <br />
            <br /> Voluptatem natus odit vero voluptatibus deleniti? Facere
            consectetur voluptatum accusamus pariatur quasi totam cupiditate
            rerum doloremque debitis, beatae necessitatibus alias? Ducimus ab
            fuga natus ipsum, minus nisi voluptatibus debitis expedita?
            Distinctio veniam a molestiae natus numquam est commodi ad. <br />
            <br /> Animi praesentium inventore, earum aliquid omnis quibusdam
            numquam molestias! Quam quod quasi at ea modi ipsum consequuntur
            veniam ducimus nemo ipsam! Maiores quidem animi praesentium
            voluptate nemo corporis alias iure nulla nostrum tempora voluptatum
            vero inventore nisi, ex amet quasi? Sapiente placeat corporis quae
            mollitia error totam. <br />
            <br /> Voluptates odit cumque consequuntur. Quidem debitis aliquid
            itaque culpa facilis. Quae animi saepe iusto! Quisquam excepturi
            harum sequi reiciendis assumenda dolor maiores, repellat, veniam
            pariatur vero quia neque sunt dignissimos beatae provident nihil
            minima?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
