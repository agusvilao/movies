import { useEffect } from 'react';
import { useState } from 'react';
import { getMovies} from '../Utilitys/getFunction';
import { MovieCard } from './MovieCard';
import styles from './MovieGrid.module.css';
import { Spinner } from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

// eslint-disable-next-line react/prop-types
export function MoviesGrid ({search}){
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=> {
        console.log(page)
        async function fetchMovies(){
            const searchUrl = search?
            '/search/movie?query=' + search + '&page=' + page:
            '/discover/movie?page=' + page;

            try{
                const data = await getMovies(searchUrl);
                setMovies((prevMovies) => prevMovies.concat(data.results));
            }catch(error){
                console.log('Error al cargar las peliculas:', error);
            }

        }
        fetchMovies();
        console.log(movies.length)

    }, [search,page])

    

    return (
    <InfiniteScroll
            dataLength={movies.length} //This is important field to render the next data
            next={()=>setPage((prevPage) => prevPage +1)}
            hasMore={true}
            loader={<Spinner></Spinner>}>
            <ul className={styles.moviesGrid}>
                { movies.map((movie)=> (
                <MovieCard key={movie.id} movie = {movie}/>
                ))}
            </ul>
    </InfiniteScroll>
    );
}