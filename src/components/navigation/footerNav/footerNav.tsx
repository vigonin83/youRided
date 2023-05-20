import Link from 'next/link';
import styles from './footerNav.module.scss';
import Social from '@/components/ui/social/social';
import Messengers from '@/components/ui/messengers/messengers';
import { FaPhoneAlt } from 'react-icons/fa';

const FooterNav = () => {
   return (
      <div className={styles.layout}>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <div className={styles.linksContainer}>
                  <div>
                     <h4 className={styles.title}>На связи 24/7</h4>
                     <div className={styles.phoneContainer}>
                        <FaPhoneAlt color={'#fed700'} size={'1.5rem'} /> <span>+7(999)888-77-66</span>
                     </div>
                  </div>
                  <div>
                     <h4 className={styles.title}>Напиши нам</h4>
                     <Messengers />
                  </div>
                  <div>
                     <h4 className={styles.title}>Мы в социальных сетях</h4>
                     <Social />
                  </div>
               </div>
               <div>
                  <h4 className={styles.title}>Каталог</h4>
                  <ul className={styles.list}>
                     <li><Link href='#'>Электросамокаты</Link></li>
                     <li><Link href='#'>Самокаты</Link></li>
                     <li><Link href='#'>Экипировка</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className={styles.title}>Покупателю</h4>
                  <ul className={styles.list}>
                     <li><Link href='#'>Оплата и доставка</Link></li>
                     <li><Link href='#'>Обмен и возврат</Link></li>
                     <li><Link href='#'>Гарантия</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>);
}

export default FooterNav;