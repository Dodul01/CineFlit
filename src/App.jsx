import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { useContext } from 'react'
import { AppContext } from './AppContext/AppContextProvider'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { isDark } = useContext(AppContext)

  return (
    <div className={`${isDark ? 'dark' : 'light'} app_container`}>
      <div className='app'>
        <Nav />
        <Outlet />
        <Toaster />
        <Footer />
      </div>
    </div>
  )
}

export default App