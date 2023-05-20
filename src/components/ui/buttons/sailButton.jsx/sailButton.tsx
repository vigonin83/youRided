import styles from "./sailButton.module.scss"
type SailButton = {
   value: string
}

const SailButton = ({ value }: SailButton) => {
   return (
      <button className={styles.button}>{value}</button>
    );
}

export default SailButton;