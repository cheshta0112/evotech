import React from "react";
import styles from "./SunHeader.module.css";
import FilePlusIcon from "../src/assets/icons/FilePlusIcon";

export default function SunHeader() {
  return (
    <div className={styles.SunHeader}>
      <div className={styles.LeftDiv}>
        <span> Dashboard </span>
        <span className={styles.AddNew}> Add New</span>
      </div>

      <div className={styles.RightDiv}>
        <span className={styles.Today}> Today </span>
        <span> Month </span>
        <span> Year </span>
        <span className={styles.Actions}> Actions </span>
        <span>
          <FilePlusIcon />
        </span>
      </div>
    </div>
  );
}
