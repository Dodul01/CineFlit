import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
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

  const appInfo = {
    isDark, setIsDark,
    isLoading, setIsLoading,
    movies, setMovies
  }

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider