import styles from "./styles.module.scss";
import Image from "next/image";
import trending1 from "../../../public/images/trending1.jpg";
import trending2 from "../../../public/images/trending2.jpg";
import trending3 from "../../../public/images/trending3.jpg";
import trending4 from "../../../public/images/trending4.jpg";
import trending5 from "../../../public/images/trending5.jpg";
import trending6 from "../../../public/images/trending6.jpg";
import trending7 from "../../../public/images/trending7.jpg";
import trending8 from "../../../public/images/trending8.jpg";
import trending9 from "../../../public/images/trending9.jpg";
import trending10 from "../../../public/images/trending10.jpg";
import trending11 from "../../../public/images/trending11.jpg";
import trending12 from "../../../public/images/trending12.jpg";
import trending13 from "../../../public/images/trending13.jpg";
import trending14 from "../../../public/images/trending14.jpg";
import trending15 from "../../../public/images/trending15.jpg";
import trending16 from "../../../public/images/trending16.jpg";
import trending17 from "../../../public/images/trending17.jpg";
import trending18 from "../../../public/images/trending18.jpg";
import trending19 from "../../../public/images/trending19.jpg";
import trending20 from "../../../public/images/trending20.jpg";
import back from "../../../public/images/back.svg";
import Footer from "@/components/footer";

export default function Trending() {
  return (
    <div className={styles.container_trending}>
      <div className={styles.trending}>
        <header className={styles.header}>
          <div className={styles.container_back}>
            <a  href="/">
              <Image className={styles.back} src={back} alt="back" width={96} height={96} />
            </a>
          </div>
          <h1 className={styles.title}>Trending</h1>
        </header>
        <div className={styles.container_Images}>
          <Image
            className={styles.images}
            src={trending1}
            alt="trending1"
            width={5000}
            height={3000}
          />
          <Image
            className={styles.images}
            src={trending2}
            alt="trending2"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending3}
            alt="trending3"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending4}
            alt="trending4"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending5}
            alt="trending5"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending6}
            alt="trending6"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending7}
            alt="trending7"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending8}
            alt="trending8"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending9}
            alt="trending9"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending10}
            alt="trending10"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending11}
            alt="trending11"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending12}
            alt="trending12"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending13}
            alt="trending13"
            width={5000}
            height={3000}
          />

          <Image
            className={styles.images}
            src={trending14}
            alt="trending14"
            width={5000}
            height={3000}
          />
          <Image
            className={styles.images}
            src={trending15}
            alt="trending15"
            width={5000}
            height={3000}
          />
          <Image
            className={styles.images}
            src={trending16}
            alt="trending16"
            width={5000}
            height={3000}
          />
          <Image
            className={styles.images}
            src={trending17}
            alt="trending17"
            width={5000}
            height={3000}
          />
          <Image
            className={styles.images}
            src={trending18}
            alt="trending18"
            width={5000}
            height={3000}
          />
          <Image
            className={styles.images}
            src={trending19}
            alt="trending19"
            width={5000}
            height={3000}
          />
          <Image
            className={styles.images}
            src={trending20}
            alt="trending20"
            width={5000}
            height={3000}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
