import Link from "next/link";
import styles from "./messengers.module.scss";
import { RiTelegramLine as TelegramIcon, RiWhatsappLine as WhatsappIcon } from 'react-icons/ri';
import { FaRegEnvelope as EnvelopeIcon} from 'react-icons/fa'

const Messengers = () => {
   return (
      <ul className={styles.wrapper}>
         <li>
            <Link href='#'><WhatsappIcon size={'1.8rem'} /></Link>
         </li>
         <li>
            <Link href='#'><TelegramIcon size={'1.8rem'} /></Link>
         </li>
         <li>
            <Link href='#'><EnvelopeIcon size={'1.6rem'} /></Link>
         </li>
      </ul>
   );
}

export default Messengers;