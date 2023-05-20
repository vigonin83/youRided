import styles from "./cartButton.module.scss";
import { BsCart2 } from "react-icons/bs";
import { IconContext } from "react-icons";

const CartButton = () => {
   return (
      <IconContext.Provider value={{ className: "global-class-name", size: "1.4rem" }}>
         <button className={styles.button} type='button' ><BsCart2 /></button>
      </IconContext.Provider>
   );
}

export default CartButton;