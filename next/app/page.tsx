import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  //https://pixabay.com/ja/photos/%E8%87%AA%E7%84%B6-%E9%87%8E%E7%94%9F%E5%8B%95%E7%89%A9-%E9%B3%A5-%E8%B5%A4%E3%81%84%E9%8E%8C-3112997/
  return (
    <main className={styles.main}>
      <Image
        src="/bird.jpg"
        className={styles.image}
        width={1280}
        height={855}
        alt="a red bird picture from Pixabay"
        priority // For the LCP image of the page
      />
    </main>
  );
}
