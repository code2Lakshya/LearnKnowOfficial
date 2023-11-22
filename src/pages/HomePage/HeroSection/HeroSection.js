import { RiArrowRightUpFill } from 'react-icons/ri';
import { MdOutlineMouse } from 'react-icons/md';
import './HeroSection.css';


const HeroSection = ({ setShowVideo }) => {

    return (
        <div className='hero-section-container'>
            <div className="hero-section-wrapper">
                <div className='hero-section-content'>
                    <h1>
                        Digital and Video Learning
                        <span><i class="fas fa-arrow-right"></i></span>
                    </h1>
                    <button onClick={() => setShowVideo(true)}>Play</button>
                </div>
            </div>
            <div className='mouse-container'>
                <p>Scroll</p>
                <span><MdOutlineMouse /></span>
            </div>
        </div>
    );
}
export default HeroSection;