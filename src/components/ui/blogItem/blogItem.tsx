import Image from "next/image";
import blogPic from '../../../../public/images/scooter-slide2.jpg';
import Link from "next/link";
import styles from "./blogItem.module.scss";

const BlogItem = () => {
   return (
      <div className={styles.layout}>
         <div className={styles.wrapper}>
            <Link className={styles.link} href={'#'}>
               <Image src={blogPic} alt='Как выбрать самокат'></Image>
               <div className={styles.content}>
                  <h4>Как выбрать самокат:</h4>
                  <p>5 важных советов</p>
               </div>
            </Link>
         </div >
      </div>
   );
}

export default BlogItem;