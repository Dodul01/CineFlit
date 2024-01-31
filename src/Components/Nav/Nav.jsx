import { NavLink } from "react-router-dom"
import { BsFillMenuButtonFill } from "react-icons/bs";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import avater from '../../assets/modalImg.jpg'
import './nav.css';
import { useContext, useState } from "react";
import { AppContext } from "../../AppContext/AppContextProvider";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, setIsDark } = useContext(AppContext);

    return (
        <div className="nav_container">
            <div>
                <h3>CineFlit</h3>
            </div>
            <div className="nav_links_container">
                <NavLink className='link' to='/'>Movies</NavLink>
                <NavLink className='link' to='/bookings'>Bookings</NavLink>

                <div onClick={() => setIsDark(!isDark)}>
                    {isDark ? <IoSunnySharp className="icon" /> : <IoMoonSharp className="icon" />}
                </div>

                <div>
                    <img className="avater" src={avater} alt="Avater" />
                </div>
            </div>

            {/* Responsive Menu */}
            <div className="mobile_menu_container">
                <BsFillMenuButtonFill onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu_icon" />
                <div style={isMenuOpen ? { right: '0px'} : { right: '500px' }} className="mobile_menu_drowire">
                    <RxCross1 onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu_icon cross_icon" />


                    <div style={isDark ? { background: '#242424', transition: 'all ease-in-out 1s' } : { background: 'white', transition: 'all ease-in-out 1s' }} className="responsive_menu_container">
                        <h3>CineFlit</h3>

                        <div>
                            <img className="avater" src={avater} alt="Avater" />
                        </div>

                        <NavLink className='link' to='/'>Movies</NavLink>
                        <NavLink className='link' to='/bookings'>Bookings</NavLink>
                        <div onClick={() => setIsDark(!isDark)}>
                            {isDark ? <IoSunnySharp className="icon" /> : <IoMoonSharp className="icon" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav