import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  const HeaderIcons = [
    {
      icon: "/images/Search.png",
      alt: "search_icon",
    },
    {
      icon: "/images/Compiling.png",
      alt: "compiling_icon",
    },
    {
      icon: "/images/Equalizer (2).png",
      alt: "equalizer_icon",
    },
    {
      icon: "/images/Cart.png",
      alt: "cart_icon",
    },
    {
      icon: "/images/Layout 4 blocks.png",
      alt: "layout_icon",
    },
  ];
  return (
    <div className={styles.Header}>
      <div
        className={styles.HeaderContent}
        style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        {HeaderIcons.map((icons, index) => (
          <div className={styles.HeaderIcons}>
            <img src={icons.icon} alt={icons.alt} />
          </div>
        ))}

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
