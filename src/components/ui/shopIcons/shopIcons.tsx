import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import styles from './shopIcons.module.scss';

const ShopIcons = () => {
   return (
      <ul className={styles.wrapper}>
         <li>
            <Link className={styles.cart} href={"/wish-list"}>
               <AiOutlineHeart size={'1.7rem'} />
               <span className={styles.quantity}>4</span>
            </Link>
         </li>
         <li>
            <Link className={styles.cart} href={"/cart"}>
               <BsCart2 size={'1.7rem'} />
               <span className={styles.quantity}>0</span>
            </Link>
         </li>
      </ul>
   );
}

export default ShopIcons;