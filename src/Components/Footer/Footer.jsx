import './footer.css';
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Mozammel Hoque Dodul</p>
                <div className="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='icon' />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className='icon' />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='icon' />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
