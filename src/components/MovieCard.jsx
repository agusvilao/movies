/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css'

export function MovieCard({ movie }){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
     return(
        <li className={styles.movieCard}>
            <Link to={'/movies/' + movie.id}>
                <img  src={imageUrl} className={styles.movieImg} alt={movie.title} width={230} height={345}/>
                <div>{movie.title}</div>
            </Link>
       </li>
    )
}