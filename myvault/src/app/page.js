"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <div>
        <h1>MyVault</h1>
        <h3>Clipboard everywhere</h3>
      </div>
      <form className={styles.form}>
        <p>Username / Email</p>
        <input></input>
        <p>Password</p>
        <input></input>
        <div className={styles.formButtons}>
          <button>login</button>
          <button>register</button>
          <a>Forgot username?</a>
        </div>
      </form>
    </div>
  );
}
