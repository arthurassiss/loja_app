import styles from "./styles.module.scss";
import Image from "next/image";
import discount from "../../../public/images/desconto.png";

type Tcard = {
  title: string;
  price: string;
  old_price: string;
  src: any;
};

export default function Card({ title, price, old_price, src }: Tcard) {
  return (
    <div className={styles.container_card}>
      <div className={styles.card}>
        
        <div className={styles.container_image}>
          <Image
            src={src}
            alt="image"
            width={1200}
            height={1200}
            className={styles.image}
          />
        </div>
        <div className={styles.container_titles}>
          <h4 className={styles.title}>{title}</h4>
          <h5 className={styles.price}>
            ${price}
            <span className={styles.old_price}>${old_price}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
