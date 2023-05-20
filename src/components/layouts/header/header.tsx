import TopHeader from "@/components/topHeader/topHeader";
import SearchBar from "@/components/searchBar/searchBar";
import NavBar from "@/components/navigation/navBar/navBar";

import styles from "./header.module.scss"
const Header = () => {
   return (
      <header className={styles.main}>
         <div>
            <TopHeader />
            <SearchBar />
            <NavBar />
         </div>
      </header>);
}

export default Header;