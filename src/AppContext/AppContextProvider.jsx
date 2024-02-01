import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([]);

  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem('moviesReservation');

    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return [];
    }
  }

  const saveDataToLocalStorage = (movieName, movie) => {
    const storedData = getDataFromLocalStorage();
    const filterDuplicate = storedData.find(movie => movie?.show.name == movieName);


    if (!filterDuplicate) {
      storedData.push(movie);
      localStorage.setItem('moviesReservation', JSON.stringify(storedData));
      return alert('Movie Ticket Booked Sucessfully')
    } else {
      return alert('you have already booked this movie.')
    }
  }


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

      setBookings(getDataFromLocalStorage());
  }, [])

  const appInfo = {
    isDark, setIsDark,
    isLoading, setIsLoading,
    movies, setMovies,
    isModalOpen, setIsModalOpen,
    getDataFromLocalStorage, saveDataToLocalStorage,
    bookings, setBookings
  }

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider