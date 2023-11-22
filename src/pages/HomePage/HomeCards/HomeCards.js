import HoverButton from "../../../components/HoverButton/HoverButton";
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import imgSrc1 from '../../../assets/about.png';
import imgSrc3 from '../../../assets/contact.png';
import imgSrc2 from '../../../assets/services.png';
import HomeCard from "./HomeCard/HomeCard";
import './HomeCards.css';

const imgSrc=[imgSrc1,imgSrc2,imgSrc3];

const HomeCards = () => {

    return (
        <ScrollEffect className='home-cards' classNameInner='home-cards-inner'>
            <div className="home-cards-heading">
                <div className="heading-upper">
                    <h1>Learn Know Digital</h1>
                    <p>All About Us</p>
                </div>
                <HoverButton heading='Contact Us' to='/contact' />
            </div>
            <div className="home-cards-content">
            <HomeCard heading='About Us' src={imgSrc1} to='/about'/>
            <HomeCard heading='Our Services' src={imgSrc2} to='/services' />
            <HomeCard heading='Contact Us' src={imgSrc3}to='/contact' />
            </div>
        </ScrollEffect>
    );
}
export default HomeCards;