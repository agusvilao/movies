import styles from './App.module.css'
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom'
import { MovieDetails } from './pages/MovieDetails'
import { LandingPage } from './pages/LandingPage'


export function App(){
    return (<Router>
        <header>
            <Link to="/" className={styles.title}>Movies</Link>
        </header>
        <main>
            <Routes>   
                 <Route exact path='/movies/:movieId' element={<MovieDetails/>}></Route>
                 <Route path='/' element={<LandingPage/>}></Route>
                 <Route path='*' element={<div>Error 404</div>}></Route>
            </Routes>
        </main>
    </Router>)
}