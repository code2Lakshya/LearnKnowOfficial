import heroImage from '../../../assets/aboutHero.mp4';
import './HeroSectionReuse.css';
import { useNavigate } from "react-router-dom";

const HeroSectionReuse = () => {

const navigate=useNavigate();

    return (
        <div className="hero-common">
            <div className="hero-common-wrapper">
                <h1>About</h1>
                <p>
                    At LearnKnow Digital, we are a dynamic team of passionate individuals 
                    dedicated to revolutionizing the Digital Learning landscape.
                </p>
                <p>
                <span>LearnKnow Digital </span>- Your Solution Partner for Digital & Video-Based Learning!
                </p>
                <button onClick={()=>navigate('/partner')}>Contact Us</button>
            </div>
            <video src={heroImage} alt='About' autoPlay loop />
        </div>
    );
}
export default HeroSectionReuse;