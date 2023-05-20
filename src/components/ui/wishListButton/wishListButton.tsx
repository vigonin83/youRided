import styles from "./wishListButton.module.scss";
import { AiOutlineHeart } from "react-icons/ai";

const WishListButton = () => {
   return (
         <button className={styles.button} type='button' ><AiOutlineHeart size={'1.4rem'} /></button>
   );
}

export default WishListButton;