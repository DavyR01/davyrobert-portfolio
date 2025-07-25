"use client";

import Link from "next/link";
import styles from "../styles/not-found.module.css";
import NavbarProjects from "./components/NavbarProjects";

export default function NotFound() {
  return (
    <>
      <NavbarProjects />
      <div className={styles.container404}>
        <div className={styles.cloak__wrapper}>
          <div className={styles.cloak__container}>
            <div className={styles.cloak}></div>
          </div>
        </div>
        <h1><span className={styles.text404}>404</span></h1>
        <div className={styles.info}>
          <h3>We can&apos;t find that page</h3>
          <p>We&apos;re fairly sure that page used to be here, but seems to have gone missing. We do apologise on it&apos;s behalf.</p>
          <Link href="/" className={styles.button} rel="noreferrer noopener">Home</Link>
        </div>
      </div>
    </>
  );
}
