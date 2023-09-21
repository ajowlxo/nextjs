import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quia
            error quaerat consectetur temporibus. Sequi sapiente alias deleniti
            fugiat. Quae saepe, unde in laboriosam mollitia at pariatur
            praesentium repudiandae quam. Ex quas optio laborum vero. Possimus
            sequi dolor quae dignissimos, id reiciendis, harum neque maxime
            laborum, quaerat cupiditate aliquam dolores unde soluta hic iure
            praesentium tempore veritatis corporis suscipit quidem.
          </p>
          <button className={styles.button}>See More</button>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/fruit.jpg" fill={true} className={styles.img} />
        </div>
      </div>
    </div>
  );
}

export default Category;
