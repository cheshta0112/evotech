import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.Header}>
      <div
        className={styles.HeaderContent}
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        <div className={styles.HeaderIcons}>
          <img src="/images/icons.png" />
        </div>

        <div className={styles.HeaderName}>
          <span style={{ color: "#959CB6", marginRight: "20px" }}>
            Nick Thomas
          </span>
          <a href="#" className={styles.IntialIcon}>
            N
          </a>
        </div>
      </div>
    </div>
  );
}
