import { useContext, useState, useEffect } from "react"
import { AppContext } from '../../AppContext/AppContextProvider';
import Loading from "../../Components/Loading/Loading";
import './movies.css'
import MovieCard from "../../Components/MovieCard/MovieCard";

const Movies = () => {
    const { isLoading, setIsLoading } = useContext(AppContext)
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false)
                setMovies(data)
            })
            .catch((error) => {
                setIsLoading(false)
                console.log(error)
            })
    }, [])

    return (
        <div className="movie_container">
            {isLoading ? <Loading /> : movies.map((movie) => <MovieCard movie={movie} />)}
        </div>
    )
}

export default Movies