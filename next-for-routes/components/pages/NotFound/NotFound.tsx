import React from "react";
import styles from "./NotFound.module.scss";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.not__found}>
      <div className={styles.content}>
        <div className={styles.texts}>
          <p className={styles.title}>Axtardığınız səhifə tapılmadı</p>
        </div>
        <Link href={"/"} className={styles.redirect__button}>
          <span>Ana Səhifə</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
