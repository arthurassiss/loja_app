import Hamburguer from "../hamburguer";
import styles from "./styles.module.scss";
import { useState } from "react";
import Close from "../close";

export default function Nav() {
  const [nav_bar, set_nav_bar] = useState(false);

  const handle_nav_bar = () => {
    const body = document.getElementsByTagName("body")[0];


    if (!nav_bar) {
      body.classList.add("no_scroll");
    } else {
      body.classList.remove("no_scroll");
    }
    set_nav_bar(!nav_bar);
  };

  return (
    <nav className={styles.nav}>
      <div>
        <div>
        
          {nav_bar ? (
            <div>
              
              <button className={styles.btn} onClick={handle_nav_bar}><Close /></button>
              <div className={styles.container_ul}>
                <ul className={styles.nav_list}>
                  <li className={styles.container_nav_list_el}>
                    <a className={styles.nav_list_el} onClick={handle_nav_bar} href="#home">
                      Home
                    </a>
                  </li>
                  <li className={styles.container_nav_list_el}>
                    <a className={styles.nav_list_el} onClick={handle_nav_bar} href="#promotion">
                      Promotion
                    </a>
                  </li>
                  <li className={styles.container_nav_list_el}>
                    <a className={styles.nav_list_el} onClick={handle_nav_bar} href="#trending">
                      Trending
                    </a>
                  </li>
                  <li className={styles.container_nav_list_el}>
                    <a className={styles.nav_list_el} onClick={handle_nav_bar} href="#contacts">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
          ) : (
            <div>
              <button className={styles.btn} onClick={handle_nav_bar}><Hamburguer /></button>
              
            </div>
          )}
          
        </div>

        
      </div>

      <div></div>
    </nav>
  );
}
