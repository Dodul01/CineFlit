import { Link } from "react-router-dom"
import dummyImage from '../../assets/dummyImage.png';
import './movieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie_card'>
            <img className="movie_poster" src={movie?.show?.image === null ? dummyImage : movie?.show?.image?.medium} alt="" />
            <p>{movie?.show?.name}</p>
            <Link to={`/movieDetails/${movie.score}`}>Show Details</Link>
        </div>
    )
}

export default MovieCard