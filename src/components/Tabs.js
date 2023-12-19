import React from "react";
import styles from "./Tabs.module.css";

export default function Tabs() {
  return (
    <div className={styles.Tabs}>
      <div className={styles.item}>
        <img src="/images/library.png" />
        <span> SaaS Application </span>
      </div>
      <div className={styles.item}>
        <img src="/images/layout-4-blocks.png" />
        <span> Main Categories</span>
      </div>
      <div
        className={styles.item}
        style={{ color: "#FFF", backgroundColor: "#50CD89" }}
      >
        <img src="/images/movie-lane-2.png" />
        <span> Video Tutorials </span>
      </div>
      <div className={styles.item}>
        <img src="/images/equalizer.png" />
        <span> Sales Statistics </span>
      </div>
      <div className={styles.item}>
        <img src="/images/shield-check.png" />
        <span> ARC Security </span>
      </div>
    </div>
  );
}
