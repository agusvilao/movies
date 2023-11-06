import styles from './Spinner.module.css'
import {TbLoaderQuarter } from 'react-icons/tb';

export function Spinner(){
    return (
        <div className = {styles.spinner}>
            <TbLoaderQuarter className={styles.spinning} size={50}/>
         </div>
    

    )
}