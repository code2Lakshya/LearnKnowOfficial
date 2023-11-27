import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import bgSrc from '../../../assets/bgServices.jpeg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './HeroServices.css';


const HeroServices = () => {

    const navigate = useNavigate();

    return (
        <div className="hero-common hero-service">
            <div className="hero-common-wrapper hero-service">
                <h1>Services</h1>
                <p>
                    We create cutting-edge learning
                </p>
                <p>
                <span>LearnKnow Digital </span>- Your Solution Partner for Digital & Video-Based Learning!
                </p>
                <button onClick={() => navigate('/partner')}>Contact Us</button>
            </div>
            <LazyLoadImage src={bgSrc} alt='services' effect="blur" />
        </div>
    );
}
export default HeroServices;