import Link from "next/link";
import styles from "./mainButton.module.scss"
type button = {
   value: string;
   link: string
}

const MainButton = ({value, link}:button) => {
   return (
      <Link className={styles.button} href={link}>{value}</Link>
    );
}

export default MainButton;