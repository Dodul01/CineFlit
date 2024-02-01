import { useContext } from "react"
import { AppContext } from '../../AppContext/AppContextProvider';
import Loading from "../../Components/Loading/Loading";
import './movies.css'
import MovieCard from "../../Components/MovieCard/MovieCard";

const Movies = () => {
    const { isLoading, movies } = useContext(AppContext)

    return (
        <div className="movie_container">
            {isLoading ? <Loading /> : movies.map((movie) => <MovieCard key={movie.score} movie={movie} />)}
        </div>
    )
}

export default Movies