import CopyRight from "@/components/ui/copyRight/copyRight";
import FooterNav from "@/components/navigation/footerNav/footerNav";
import styles from './footer.module.scss'

const Footer = () => {
   return (
      <footer className={styles.footer}>
         <FooterNav />
         <CopyRight />
      </footer>);
}

export default Footer;