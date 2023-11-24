import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from '../../assets/logo2.png'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {

    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-header">
                    <p>Get In
                        <span>Touch</span>
                        <span><i className="fas fa-arrow-right"></i></span>
                    </p>
                </div>
                <div className="footer-content">
                    <div className="company-details">
                        <LazyLoadImage src={logo} alt='logo' effect="blur" />
                        <p>
                            At LearnKnow Digital, we take pride in being globally recognized as the best custom
                            content eLearning & Video Production company.
                        </p>
                    </div>
                    <div className="footer-card socials">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>
                                <span><CiLinkedin /></span>
                                <a href='https://www.linkedin.com/company/96120189/'>Linkedin</a>
                            </li>
                            <li>
                                <span><FaFacebookSquare /></span>
                                <a href='https://www.facebook.com/people/learnknowd/100091618494050/?mibextid=ZbWKwL'>Facebook</a>
                            </li>
                            <li>
                                <span><FaInstagram /></span>
                                <a href='https://www.instagram.com/learnknowd/?igshid=MzRlODBiNWFlZA%3D%3D'>Instagram</a>
                            </li>
                            <li>
                                <span><FaYoutube /></span>
                                <a href='https://www.youtube.com/channel/UCV0eu4FSGyP1SwE0IhL9HIA'>Youtube</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-card contact">
                        <h3>Contact Info</h3>
                        <a href='mailto:'>info@learnknowdigital.com</a>
                    </div>
                    <div className="footer-card links">
                        <h3>Links</h3>
                        <ul>
                            <li> <Link to='/'>Home</Link> </li>
                            <li> <Link to='/about-us'>About Us</Link> </li>
                            <li> <Link to='/services'>Services</Link> </li>
                            <li> <Link to='/blog'>Blog</Link> </li>
                            <li> <Link to='/careers'>Careers</Link> </li>
                            <li> <Link to='/partner'>Partner With Us</Link> </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-about">
                    <p>© 2023 All Right Reserved || <span>Learn Know Digital</span></p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;