import { ReactNode } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './mainLayout.module.scss'

type ChildProp = {
   children: ReactNode
}

const MainLayout = ({ children }: ChildProp )=> {
   return (
      <>
         <Header />
         <main className={styles.main}>
            {children}
         </main>
         <Footer />
      </>
   );
}

export default MainLayout;