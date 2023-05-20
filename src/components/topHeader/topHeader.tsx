import Link from "next/link";
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri';
import styles from "./topHeader.module.scss";

const TopHeader = () => {
   return (
      <div className={styles.main}>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <div>
                  <div className={styles.items}>
                     <FaPhoneAlt color={'#fed700'} size={'1rem'} />
                     <span className={styles.tel}>+7(999)888-77-66</span>
                  </div>
                  <div className={styles.items}>
                     <FaRegEnvelope color={'#fed700'} size={'1rem'} />
                     <Link className={styles.text} href="mailto:tebya-vezet@yandex.ru">tebya-vezet@yandex.ru</Link>
                  </div>
               </div>
               <div className={styles.account}>
                  <RiAccountCircleLine color={'#fed700'} size={'1.3rem'} />
                  <Link className={styles.link} href="#">
                     <span className={styles.text}>Войти</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TopHeader;