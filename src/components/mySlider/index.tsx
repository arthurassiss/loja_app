import shoe1 from "../../../public/images/shoe1.jpg";
import shoe2 from "../../../public/images/shoe2.jpg";
import shoe3 from "../../../public/images/shoe3.jpg";
import shoe4 from "../../../public/images/shoe4.jpg";
import shoe5 from "../../../public/images/shoe5.jpg";
import shoe6 from "../../../public/images/shoe6.jpg";
import shoe7 from "../../../public/images/shoe7.jpg";
import shoe8 from "../../../public/images/shoe8.jpg";
import shoe9 from "../../../public/images/shoe9.jpg";
import styles from "./styles.module.scss";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Card from "../card";
import discount from "../../../public/images/desconto.png";
import Image from "next/image";

const images = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8, shoe9];

const title = [
  "adidas omerlock",
  "blackmoga puma",
  "adidas advers",
  "nike adivans",
  "noitchen puma",
  "adidas mulci",
  "vans hidjeck",
  "olvans puma",
  "adidas chitzen",
];

const price = ["260", "390", "280", "220", "360", "380", "460", "190", "280"];

const old_price = [
  "360",
  "410",
  "300",
  "260",
  "410",
  "400",
  "560",
  "240",
  "300",
];

export default function MySlider() {
  const [current_index, set_current_index] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = current_index === 1;
    if (isFirstSlide) {
      return;
    }

    const newIndex = current_index - 1;
    set_current_index(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = current_index === images.length - 2;
    if (isLastSlide) {
      return;
    }

    const newIndex = current_index + 1;
    set_current_index(newIndex);
  };

  return (
    <div id="promotion" className={styles.container_cards}>
      <div className={styles.container_card}>
        <div>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className={styles.container_card}>
          <div className={styles.card1}>
            <Image
              className={styles.discount}
              src={discount}
              alt="discount"
              width={96}
              height={96}
            />
            <div className={styles.container_image}>
              <Card
                src={images[current_index - 1]}
                title={title[current_index - 1]}
                price={price[current_index - 1]}
                old_price={old_price[current_index - 1]}
              />
            </div>
          </div>
          <div className={styles.card2}>
            <Image
              className={styles.discount}
              src={discount}
              alt="discount"
              width={96}
              height={96}
            />
            <div className={styles.container_image}>
              <Card
                src={images[current_index]}
                title={title[current_index]}
                price={price[current_index]}
                old_price={old_price[current_index]}
              />
            </div>
          </div>
          <div className={styles.card3}>
            <Image
              className={styles.discount}
              src={discount}
              alt="discount"
              width={96}
              height={96}
            />
            <div className={styles.container_image}>
              <Card
                src={images[current_index + 1]}
                title={title[current_index + 1]}
                price={price[current_index + 1]}
                old_price={old_price[current_index + 1]}
              />
            </div>
          </div>
        </div>
        <div>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
}
