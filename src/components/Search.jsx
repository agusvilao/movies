import styles from './Search.module.css'
import { TbSearch } from 'react-icons/tb'
import {useSearchParams } from 'react-router-dom';

export function Search(){
    const [params, setParams] = useSearchParams();
    const search = params.get("search");


    const handleSubmit = (e) =>{
        e.preventDefault();

        setParams({search: search})
    }

    return (
       <form className={styles.searchConteiner} onSubmit={handleSubmit}>
           <div className={styles.searchBox}>
               <input 
               type="text"  
               className={styles.searchInput}
               value = {search?? ""}
               autoFocus
               placeholder='Title'
               aria-label='Search Movies'
               onChange={(e)=> {
                const value = e.target.value;
                setParams({search: value});
                }}/>
               <button className={styles.searchButton} type="submit">
                   <TbSearch size={18}/>
               </button>
           </div>
       </form>
    )
}