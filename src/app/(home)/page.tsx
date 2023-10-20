'use client'

import Image from "next/image";
import styles from "./styles.module.scss";
import shoe from "../../../public/images/shoes_svg.svg";
import profile from "../../../public/images/profile.svg";
import share from "../../../public/images/share.svg";
import heart from "../../../public/images/heart.svg";
import home_page_shoes from "../../../public/images/shoes_png.png";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import trending1 from '../../../public/images/trending1.jpg';
import trending2 from '../../../public/images/trending2.jpg';
import trending3 from '../../../public/images/trending3.jpg';
import trending4 from '../../../public/images/trending4.jpg';
import trending5 from '../../../public/images/trending5.jpg';
import trending6 from '../../../public/images/trending6.jpg';
import MySlider from "@/components/mySlider";

export default function Home() {
  return (
    <main id="home" className={styles.container_page}>
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.container_header_contents}>
            <Image
              className={styles.header_content_icon}
              src={shoe}
              alt="shoe"
              width={96}
              height={96}
            />
            
            <div className={styles.header_contents}>
              <a href="#home" className={styles.content}>Home</a>
              <a href="#promotion" className={styles.content}>Promotion</a>
              <a href="#trending" className={styles.content}>Trending</a>
              <a href="#contacts" className={styles.content}>Contacts</a>
            </div>
          </div>
          <div className={styles.container_header_search_icons}>
            <div className={styles.container_header_icons}>
              <Image
                className={styles.header_icon}
                src={heart}
                alt="lupa"
                width={96}
                height={96}
              />
              <Image
                className={styles.header_icon}
                src={share}
                alt="lupa"
                width={96}
                height={96}
              />
              <Image
                className={styles.header_icon}
                src={profile}
                alt="lupa"
                width={96}
                height={96}
              />
            </div>
          </div>
          <Nav />
        </header>
        <div className={styles.container_home_page}>
          <div className={styles.home_page}>
            <div className={styles.home_page_information}>
              <h1 className={styles.home_page_title}>
                Finest footwear for finest peoples
              </h1>
              <p className={styles.home_page_text}>
                We have been ofering the best level of confort, style and
                attention to details for years!
              </p>
              <a href="#contacts"><button className={styles.home_page_button}>Shop Now</button></a>
              
            </div>
            <div className={styles.container_home_page_image}>
              <Image
                className={styles.home_page_image}
                src={home_page_shoes}
                alt="home_page_shoes"
                width={1200}
                height={1200}
              />
              <div className={styles.container_promotion_text}>
                <p className={styles.promotion_text}>
                  Get up to 30% of discount <br /> <br />
                  You can get extra 10% discount on HDFC bank
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <MySlider />

      <div id="trending" className={styles.container_trending}>
        <div className={styles.trending}>
          <h4 className={styles.trending_title}>Trending</h4>
          <a href='/trending' className={styles.trending_more}>See all</a>
        </div>
        <div className={styles.container_trending_photos}>
          <div className={styles.container_trending_photo}>
            <Image className={styles.trending_photo} src={trending1} alt="trending1" width={1200} height={1200}/>
            <h3 className={styles.trending_photo_title}>qualidade</h3>
          </div>
          <div className={styles.container_trending_photo}>
            <Image className={styles.trending_photo} src={trending2} alt="trending1" width={1200} height={1200}/>
            <h3 className={styles.trending_photo_title}>beleza</h3>
          </div>
          <div className={styles.container_trending_photo}>
            <Image className={styles.trending_photo} src={trending3} alt="trending1" width={1200} height={1200}/>
            <h3 className={styles.trending_photo_title}>esporte</h3>
          </div>
          <div className={styles.container_trending_photo}>
            <Image className={styles.trending_photo} src={trending4} alt="trending1" width={1200} height={1200}/>
            <h3 className={styles.trending_photo_title}>moda</h3>
          </div>
          <div className={styles.container_trending_photo}>
            <Image className={styles.trending_photo} src={trending5} alt="trending1" width={1200} height={1200}/>
            <h3 className={styles.trending_photo_title}>autentico</h3>
          </div>
          <div className={styles.container_trending_photo}>
            <Image className={styles.trending_photo} src={trending6} alt="trending1" width={1200} height={1200}/>
            <h3 className={styles.trending_photo_title}>inovador</h3>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
