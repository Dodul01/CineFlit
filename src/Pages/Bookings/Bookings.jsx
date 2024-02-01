import { useContext, useEffect } from "react"
import { AppContext } from "../../AppContext/AppContextProvider"
import dummyImage from '../../assets/dummyImage.png';
import './bookings.css';
import toast from "react-hot-toast";

const Bookings = () => {
    const { bookings, setBookings, getDataFromLocalStorage } = useContext(AppContext);


    useEffect(() => {
        setBookings(getDataFromLocalStorage());
    }, [bookings])

    const handleClearBooking = () => {
        setBookings([]);
        localStorage.clear();
        toast.success('Bookings Cleared Sucessfully.')
    }


    return (
        <div className="bookings_container">
            {bookings.length === 0 ?
                <div className="emptyPage">
                    <h1>You Don't Have Any Booking</h1>
                </div> :
                <div className="bookings_movie_container">
                    {bookings.map((movie) => <div className="movie_bookingCard">
                        <div>
                            <img className="booking_movie_image" src={movie?.show?.image === null ? dummyImage : movie?.show?.image?.medium} alt="" />
                        </div>
                        <div>
                            <h3>{movie?.show?.name}</h3>
                            <p>Language: {movie?.show?.language}</p>
                            <div className="tag_container">
                                {movie?.show?.genres?.map(tag => <div key={tag} className="tag">{tag}</div>)}
                            </div>
                        </div>
                    </div>)}
                </div>
            }
            {bookings.length > 0 && <button onClick={handleClearBooking} className="clearbtn">Clear Booking</button>}
        </div>
    )
}

export default Bookings