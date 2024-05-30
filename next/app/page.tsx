import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  //https://pixabay.com/ja/photos/%E8%87%AA%E7%84%B6-%E9%87%8E%E7%94%9F%E5%8B%95%E7%89%A9-%E9%B3%A5-%E8%B5%A4%E3%81%84%E9%8E%8C-3112997/
  return (
    <main className={styles.main}>
      <Image
        src="/images/page-1.png"
        className={styles.image}
        width={560}
        height={800}
        alt="page 1"
        priority // For the LCP image of the page
      />
      <div style={{ marginTop: "20px" }}></div>
      <Image
        src="/images/page-2.png"
        className={styles.image}
        width={560}
        height={800}
        alt="page 1"
        loading="eager"
      />
      <div style={{ marginTop: "20px" }}></div>
      <Image
        src="/images/page-3.png"
        className={styles.image}
        width={560}
        height={800}
        alt="page 1"
      />
      <div style={{ marginTop: "1500px" }}></div>
      <Image
        src="/images/page-4.png"
        className={styles.image}
        width={560}
        height={800}
        alt="page 1"
        // priority // For the LCP image of the page
      />
    </main>
  );
}
