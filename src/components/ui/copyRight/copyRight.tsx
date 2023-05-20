import styles from './copyRight.module.scss';
import Image from 'next/image';
import mirIcon from '@/../public/images/mir-logo-h14px.svg';
import sberIcon from '@/../public/images/s-footer.svg';
import yIcon from '@/../public/images/ypay.svg';
import visaIcon from '../../../../public/images/Visa_Inc._logo.svg';
import masterIcon from '../../../../public/images/Mastercard-logo.svg';

const CopyRight = () => {
   return (
      <div>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <p>© 2022 – 2023 Компания ТебяВезет</p>
               <div className={styles.iconsWrapper}>
                  <Image className={styles.icons} src={mirIcon} height={50} width={50} alt='Карта Мир' />
                  <Image className={styles.icons} src={visaIcon} height={45} width={45} alt='Виза' />
                  <Image className={styles.icons} src={masterIcon} height={30} width={30} alt='Мастер Кард' />
                  <Image className={styles.icons} src={sberIcon} height={20} width={20} alt='Сбер Пэй' />
                  <Image className={styles.icons} src={yIcon} height={49} width={49} alt='Яндекс Пэй' />
               </div>
            </div>
         </div>
      </div>
   );
}

export default CopyRight;