import Link from "next/link";
import styles from "./social.module.scss";
import { SlSocialVkontakte as VkIcon } from "react-icons/sl";
import { AiOutlineYoutube as YouTubeIcon } from "react-icons/ai";

const Social = () => {
   return (
      <ul className={styles.wrapper}>
         <li>
            <Link href='#'><VkIcon size={'1.7rem'}/></Link>
         </li>
         <li>
            <Link href='#'><YouTubeIcon size={'1.8rem'} /></Link>
         </li>
      </ul>
    );
}

export default Social;