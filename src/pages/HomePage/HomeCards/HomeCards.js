import HoverButton from "../../../components/HoverButton/HoverButton";
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import imgSrc1 from '../../../assets/about.png';
import imgSrc3 from '../../../assets/contact.png';
import imgSrc2 from '../../../assets/services.png';
import HomeCard from "./HomeCard/HomeCard";
import './HomeCards.css';


const HomeCards = () => {

    return (
        <ScrollEffect className='home-cards' classNameInner='home-cards-inner'>
            <div className="home-cards-heading">
                <div className="heading-upper">
                    <h1>Learn Know Digital</h1>
                    <p>All About Us</p>
                </div>
                <HoverButton heading='Join Us' to='/partner' />
            </div>
            <div className="home-cards-content">
            <HomeCard heading='About Us' src={imgSrc1} to='/about-us'/>
            <HomeCard heading='Our Services' src={imgSrc2} to='/services' />
            <HomeCard heading='Contact Us' src={imgSrc3}to='/partner' />
            </div>
            <p>
            At LearnKnow Digital, we take pride in being globally recognized as the best custom content 
            eLearning & Video Production company. With our unwavering commitment to excellence, we 
            deliver innovative, engaging, and impactful Digital Learning solutions that empower 
            organizations and learners worldwide.
            </p>
        </ScrollEffect>
    );
}
export default HomeCards;