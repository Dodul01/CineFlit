import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { AppContext } from "../../AppContext/AppContextProvider";
import { IoLanguageOutline, IoTimeOutline } from "react-icons/io5";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import dummyImage from '../../assets/dummyImage.png';
import './movieDetails.css'
import Modal from "../../Components/Modal/Modal";

const MovieDetails = () => {
  const { movies, isModalOpen, setIsModalOpen , saveDataToLocalStorage} = useContext(AppContext);
  const { id } = useParams();
  const movie = movies.find((movie) => movie?.show.name === id)
  const tag = movie?.show?.genres[0];

  const handleTicketBooking = (e) => {
    e.preventDefault();
    saveDataToLocalStorage(movie?.show.name, movie)
  }


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
            <Link className="details_text" to={movie?.show?.officialSite}><TbWorldShare className="icon" /> Official Site</Link>
          </div>

          <div className="movie_details" dangerouslySetInnerHTML={{ __html: movie?.show?.summary }}></div>

          <button onClick={() => setIsModalOpen(true)} className="bookBtn">Buy Ticket</button>

          <Modal isModalOpen={isModalOpen}>
            <h4>Buy Ticket</h4>
            <form onSubmit={handleTicketBooking} className="booking_form">
              <div className="input_container">
                <div>
                  <label>Movie Name</label>
                  <input type="text" value={movie?.show.name} readOnly />
                </div>
                <div>
                  <label>Country</label>
                  <input type="text" value={movie?.show?.network?.country?.name} readOnly />
                </div>
                <div>
                  <label>Time Zone</label>
                  <input type="text" value={movie?.show?.network?.country?.timezone} readOnly />
                </div>
                <div>
                  <label>Tags</label>
                  <input type="text" value={tag} readOnly />
                </div>
              </div>

              <button onClick={() => setIsModalOpen(false)} className="bookBtn">Buy Now</button>
            </form>
          </Modal>

        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default MovieDetails