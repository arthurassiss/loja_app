import styles from "./styles.module.scss";
import Image from "next/image";
import shoe from "../../../public/images/shoes_svg.svg";

export default function Footer() {
  return (
    <div id="contacts" className={styles.container_footer}>
      <div className={styles.footer}>
        <div className={styles.footer_information}>
          <div className={styles.explore_footer}>
            <h4 className={styles.title}>Page</h4>
            <div className={styles.container_sub_title}>
              <h5 className={styles.sub_title}>Home</h5>
              <h5 className={styles.sub_title}>Promotion</h5>
              <h5 className={styles.sub_title}>Trending</h5>
              <h5 className={styles.sub_title}>Contacts</h5>
            </div>
          </div>
          <div className={styles.explore_footer}>
            <h4 className={styles.title}>Company</h4>
            <div className={styles.container_sub_title}>
              <h5 className={styles.sub_title}>About us</h5>
              <h5 className={styles.sub_title}>Carrers</h5>
              <h5 className={styles.sub_title}>Press</h5>
              <h5 className={styles.sub_title}>News</h5>
              <h5 className={styles.sub_title}>Media kit</h5>
              <h5 className={styles.sub_title}>Contact</h5>
            </div>
          </div>
          <div className={styles.explore_footer}>
            <h4 className={styles.title}>Resources</h4>
            <div className={styles.container_sub_title}>
              <h5 className={styles.sub_title}>Blog</h5>
              <h5 className={styles.sub_title}>NewsLetter</h5>
              <h5 className={styles.sub_title}>Events</h5>
              <h5 className={styles.sub_title}>Suport</h5>
            </div>
          </div>
          <div className={styles.explore_footer}>
            <h4 className={styles.title}>Medias</h4>
            <div className={styles.container_sub_title}>
              <h5 className={styles.sub_title}>Whatsapp</h5>
              <h5 className={styles.sub_title}>Instagram</h5>
              <h5 className={styles.sub_title}>Linkedin</h5>
              <h5 className={styles.sub_title}>Gmail</h5>
              <h5 className={styles.sub_title}>Facebook</h5>
            </div>
          </div>
        </div>
        <div className={styles.container_image}>
          <Image
            className={styles.logo_footer}
            alt="shoe"
            src={shoe}
            width={96}
            height={96}
          />
        </div>
      </div>
      <div className={styles.container_bar}>
        <div className={styles.bar}></div>
      </div>
      <div className={styles.container_bottom_footer}>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/arthurassiss/"
        >
          <div className={styles.logo_social1}></div>
        </a>

        <a
          className={styles.link}
          href="https://www.instagram.com/assiss_arthur/?next=%2F"
        >
          <div className={styles.logo_social2}></div>
        </a>

        <a className={styles.link} href="https://wa.me/946608728">
          <div className={styles.logo_social3}></div>
        </a>
      </div>
    </div>
  );
}
