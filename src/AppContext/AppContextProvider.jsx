import { createContext, useState } from 'react'

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const appInfo = {
    isDark, setIsDark,
    isLoading, setIsLoading
  }

  return (
    <AppContext.Provider value={appInfo}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider