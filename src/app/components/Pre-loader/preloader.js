import React from "react";
import styles from "./Preloader.module.css"; // CSS module for styling

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Preloader;
