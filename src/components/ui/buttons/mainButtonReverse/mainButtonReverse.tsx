import Link from "next/link";
import styles from "./mainButtonReverse.module.scss"
type button = {
   value: string;
   link: string
}

const MainButtonReverse = ({ value, link }: button) => {
   return (
      <Link className={styles.button} href={link}>{value}</Link>
   );
}

export default MainButtonReverse;