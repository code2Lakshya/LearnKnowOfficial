import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import heroImage from '../../../assets/aboutHero.jpeg';
import './HeroSectionReuse.css';
import { useNavigate } from "react-router-dom";

const HeroSectionReuse = () => {

const navigate=useNavigate();

    return (
        <div className="hero-common">
            <div className="hero-common-wrapper">
                <h1>About</h1>
                <p>
                    At <span>LearnKnow Digital</span>, we are a dynamic team of passionate individuals 
                    dedicated to revolutionizing the Digital Learning landscape.
                </p>
                <p>
                LearnKnow Digital - Your Solution Partner for Digital & Video-Based Learning!
                </p>
                <button onClick={()=>navigate('/partner')}>Contact Us</button>
            </div>
            <LazyLoadImage src={heroImage} alt='About' effect="blur" />
        </div>
    );
}
export default HeroSectionReuse;