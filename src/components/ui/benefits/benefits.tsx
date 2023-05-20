import styles from "./benefits.module.scss";
import { FaShippingFast, FaRecycle, FaShieldAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { RiRidingFill } from 'react-icons/ri';
import { IconContext } from "react-icons";

const Benefits = () => {
   return (
      <div className={styles.section}>
         <IconContext.Provider value={{ color: "#fed700", size: "1.7rem", className: "global-class-name" }}>
            <div className={styles.container}>
               <div className={styles.wrapper}>
                  <div className={styles.item}>
                     <FaShippingFast />
                     <div>
                        <h5 className={styles.title}>Бесплатная доставка</h5>
                        <p>при заказе от 5 000 р.</p>
                     </div>
                  </div>
                  <div className={styles.item}>
                     <FaRecycle />
                     <div>
                        <h5 className={styles.title}>Возврат товара</h5>
                        <p>в течении 14 дней</p>
                     </div>
                  </div>
                  <div className={styles.item}>
                     <FaShieldAlt />
                     <div>
                        <h5 className={styles.title}>Гарантия на товар</h5>
                        <p>6 месяцев</p>
                     </div>
                  </div>
                  <div className={styles.item}>
                     <RiRidingFill />
                     <div>
                        <h5 className={styles.title}>Тест - драйв</h5>
                        <p>перед покупкой</p>
                     </div>
                  </div>
                  <div className={styles.item}>
                     <FaMoneyCheckAlt />
                     <div>
                        <h5 className={styles.title}>Удобная оплата</h5>
                        <p>любой способ</p>
                     </div>
                  </div>
               </div>
            </div>
         </IconContext.Provider>
      </div>
   )
}

export default Benefits;