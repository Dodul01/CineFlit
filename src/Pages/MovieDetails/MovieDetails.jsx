import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContextProvider";
import { IoLanguageOutline, IoTimeOutline } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import dummyImage from '../../assets/dummyImage.png';
import './movieDetails.css'

const MovieDetails = () => {
  const { movies } = useContext(AppContext);
  const { id } = useParams();
  const movie = movies.find((movie) => movie?.show.name === id)

  return (
    <div>
      <div className="movie_details_container">
        <div>
          <img className="movie_tubmnail" src={movie?.show?.image === null ? dummyImage : movie?.show?.image?.original} alt="" />
        </div>
        <div>
          <h1>{movie?.show.name}</h1>
          <div className="tag_container">
            {movie?.show?.genres?.map(tag => <div key={tag} className="tag">{tag}</div>)}
          </div>

          <div>
            <p className="details_text"><IoLanguageOutline className="icon" /> Language: {movie?.show?.language}</p>
            <p className="details_text"><FaFontAwesomeFlag className="icon" /> Country: {movie?.show?.network?.country?.name}, {movie?.show?.network?.country?.code} </p>
            <p className="details_text"><IoTimeOutline className="icon" /> TimeZone: {movie?.show?.network?.country?.timezone}</p>
            <Link className="details_text" to={movie?.show?.officialSite}><TbWorldShare className="icon"/> Official Site</Link>
          </div>

          <div className="movie_details" dangerouslySetInnerHTML={{ __html: movie?.show?.summary }}></div>

          <button className="bookBtn">Buy Ticket</button>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default MovieDetails