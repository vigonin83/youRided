import Link from "next/link";
import { FC } from "react";
import styles from "./navBar.module.scss"

const NavBar: FC = () => {
   return (
      <div className={styles.section}>
         <div>
            <nav>
               <ul className={styles.wrapper}>
                  <li className={styles.item}>
                     <Link href="/escooter">
                        Электросамокаты
                     </Link>
                  </li>
                  <li className={styles.item}><Link href="/scooter">Самокаты</Link></li>
                  <li className={styles.item}><Link href="/equipment">Экипировка</Link></li>
                  <li className={styles.item}><Link href="/blog">Статьи</Link></li>
                  <li className={styles.item}><Link href="/payment">оплата & доставка</Link></li>
                  <li className={styles.item}><Link href="/guarantee">гарантия</Link></li>
                  <li className={styles.item}><Link href="/about">о нас</Link></li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default NavBar;