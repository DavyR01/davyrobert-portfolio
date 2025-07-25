"use client";

import Link from "next/link";
import styles from "../styles/not-found.module.css";
import NavbarProjects from "./components/NavbarProjects";

export default function NotFound() {
  return (
    <>
      <NavbarProjects />
      <div className={styles.container404}>
        <span className={styles.shadow404}>404</span>
        <h1 className={styles.main404}>404</h1>
        <div className={styles.haloWrapper404}>
          <div className={styles.haloContainer404}>
            <div className={styles.haloGradient404}></div>
          </div>
        </div>
        <div className={styles.info404}>
          <h3>We can&apos;t find that page</h3>
          <p>We&apos;re fairly sure that page used to be here, but seems to have gone missing. We do apologise on it&apos;s behalf.</p>
          <Link href="/" className={styles.button404} rel="noreferrer noopener">Home</Link>
        </div>
      </div>
    </>
  );
}
