import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './HeroSectionCommon.css';

const HeroSectionCommon=({heading,description,src})=>{

const navigate=useNavigate();

    return(
        <div className="hero-common ">
        <div className="hero-common-wrapper ">
            <h1>{heading}</h1>
            <p>
                {description}
            </p>
            <p>
            <span>LearnKnow Digital </span>- Your Solution Partner for Digital & Video-Based Learning!
            </p>
            <button onClick={() => navigate('/partner')}>Contact Us</button>
        </div>
        <LazyLoadImage src={src} alt={heading} effect="blur" />
    </div>
    );
}
export default HeroSectionCommon;