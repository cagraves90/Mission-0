import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import MovieCard from './MovieCard'
import { useState, useEffect } from 'react'
import style from "./MovieMain.module.css"

const API = 'https://www.omdbapi.com?apikey=fd1bfcd'

function MovieMain() {

    const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

 const searchMovies = async (title) => {
  const response = await fetch(`${API}&s=${title}`)
  const data = await response.json();

  setMovies(data.Search)
 }

  useEffect(() => {
    searchMovies('John Wick');
  }, [])

  return (
    <>
    <div className={style.mainHeader}>
            <div>
                <h1 className={style.mainText}>MovieGram - the greatest site for movie searches</h1>
            </div>
            <div className={style.search}>
                <input className={style.input} placeholder='Search for Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

                <button className={style.searchButton} onClick={() => searchMovies(searchTerm)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        <div className={style.mainBackground}>
            <img className={style.mainPicture} src="./background01.jpg" alt="background-image" />
        </div>

    </div>

      <div className={style.mainContainer}>
        {
            movies?.length > 0
            ? (
                <div className={style.cardContainer}>
              {movies.map((movie) => ( 
                  <MovieCard movie={movie}/>
                  ))}
            </div>
          ) : (
              <div className={style.emptyContainer}>
            <h2>No movies found</h2>
            </div>
          )
        }

        
        </div>
    </>
  )
    
}
export default MovieMain