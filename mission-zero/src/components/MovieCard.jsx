import style from "./MovieCard.module.css"

function MovieCard({ movie }) {
  return (
        <div className={style.movieCard}>
             <div className={style.movie}>
                <img src={movie.Poster} alt={movie.Title} />
                
            </div>
            <div className={style.movieText}>

         <h3>{movie.Title}</h3>
         <h3>{movie.Year}</h3>
            </div>
        </div>
  )
}
export default MovieCard