import { ReactNode } from 'react';
import styles from "./itemFlexLayout.module.scss";

type ChildProp = {
   children: ReactNode
}
const ItemFlexLayout = ({ children }:ChildProp) => {
   return (
      <div className={styles.wrapper}>
         {children}
      </div>
   );
}

export default ItemFlexLayout;