import Hamburguer from "../hamburguer";
import styles from "./styles.module.scss";
import { useState } from "react";
import Close from "../close";

export default function Nav() {
  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    const body = document.getElementsByTagName("body")[0];


    if (!navBar) {
      body.classList.add("no_scroll");
    } else {
      body.classList.remove("no_scroll");
    }
    setNavBar(!navBar);
  };

  return (
    <nav className={styles.nav}>
      <div>
        <div>
        
          {navBar ? (
            <div>
              
              <button className={styles.btn} onClick={handleNavBar}><Close /></button>
              <div className={styles.container_ul}>
                <ul className={styles.nav_list}>
                  <li className={styles.container_nav_list_el}>
                    <a className={styles.nav_list_el} onClick={handleNavBar} href="#home">
                      Home
                    </a>
                  </li>
                  <li className={styles.container_nav_list_el}>
                    <a className={styles.nav_list_el} onClick={handleNavBar} href="#promotion">
                      Promotion
                    </a>
                  </li>
                  <li className={styles.container_nav_list_el}>
                    <a className={styles.nav_list_el} onClick={handleNavBar} href="#trending">
                      Trending
                    </a>
                  </li>
                  <li className={styles.container_nav_list_el}>
                    <a className={styles.nav_list_el} onClick={handleNavBar} href="#contacts">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
          ) : (
            <div>
              <button className={styles.btn} onClick={handleNavBar}><Hamburguer /></button>
              
            </div>
          )}
          
        </div>

        
      </div>

      <div></div>
    </nav>
  );
}
