import React from "react";
import styles from "./Middle.module.css";

export default function Middle() {
  return (
    <div className={styles.Middle}>
      <div className={styles.Categories}>
        <div className={styles.CategoriesGraph}>
          <span> Categories </span>
          <button>
            Export
            <img src="https://cdn-icons-png.flaticon.com/128/3916/3916903.png" />
          </button>
        </div>
      </div>

      <div className={styles.Sales}>
        <div className={styles.Heading}>Sales Progress</div>

        <div className={styles.SalesItem}>
          <ul>
            <li>
              <img src="/images/library.svg" />
              <h2>Briviba SaaS</h2>
              <p> PHP, SQLite, Artisan CLIмм</p>
            </li>
            <li>
              <img src="/images/mic.png" />
              <h2>Briviba SaaS</h2>
              <p> PHP, SQLite, Artisan CLIмм</p>
            </li>
            <li>
              <img src="/images/movie-lane-2.png" />
              <h2>Briviba SaaS</h2>
              <p> PHP, SQLite, Artisan CLIмм</p>
            </li>
            <li>
              <img src="/images/shield-check.png" />
              <h2>Briviba SaaS</h2>
              <p> PHP, SQLite, Artisan CLIмм</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
