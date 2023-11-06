import styles from './MovieDetails.module.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMovies } from '../Utilitys/getFunction';
import { useState } from 'react';
import { Spinner } from '../components/Spinner';


export function MovieDetails(){
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState();

    useEffect(()=>{
        setIsLoading(true);
        getMovies('/movie/' + movieId).then((data)=>{
                                        setIsLoading(false)
                                        setMovie(data);
                                        console.log(movie);
    })},[movieId]);

   if(isLoading)
   {
       return <Spinner></Spinner>;
   }

    if(!movie){
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    
    return(
        <div className={styles.detailsConteiner}>
            <div className={styles.col} >
                <img src={imageUrl} alt={movie.title} className = {`${styles.col} ${styles.movieImg}`}></img>
            </div>
            <div className={`${styles.col}  ${styles.MovieDetails}`}>
                <p><strong>Title:</strong> {movie.title}</p>
                <p><strong>Description:</strong> {movie.overview}</p>
                <p><strong>Gender:</strong>{
                    movie.genres.map(genre => genre.name).join(',')
                }</p>
            </div>
        </div>
    )
}