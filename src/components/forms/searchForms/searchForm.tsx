import styles from './search.module.scss';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useState } from 'react';

const SearchForm = () => {
   const [value, setValue] = useState('')

   const handleChange = ({target}: React.ChangeEvent<HTMLInputElement>): void   => {
      setValue(target.value)
   }

   return (
      <div className={styles.wrapper}>
         <form className={styles.searchForm} action="#">
            <input
               className={styles.input}
               type="text"
               name='searchForm'
               placeholder='Ищи и тебя увезет . . .'
               value={value} onChange={handleChange}
            />
            <IconContext.Provider value={{ color: "#333E48", className: "global-class-name", size: "1.3rem" }}>
               <button className={styles.button} type="submit" ><BsSearch /></button>
            </IconContext.Provider>
         </form>
      </div>
   );
}

export default SearchForm;