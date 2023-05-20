import Logo from "../ui/logo/logo";
import SearchForm from "../forms/searchForms/searchForm";
import ShopIcons from "../ui/shopIcons/shopIcons";
import styles from "./searchBar.module.scss"

const SearchBar = () => {
   return (
      <div className={styles.section}>
         <div className={styles.container}>
            <div className={styles.wrapper}>
               <Logo />
               <SearchForm />
               <ShopIcons />
            </div>
         </div>
      </div>
 );
}

export default SearchBar;