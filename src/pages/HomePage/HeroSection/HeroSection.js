import { RiArrowRightUpFill } from 'react-icons/ri';
import { MdOutlineMouse } from 'react-icons/md';
import './HeroSection.css';


const HeroSection = ({ setShowVideo }) => {

    return (
        <div className="hero-section-wrapper">
            <div className='hero-section-content'>
                <h1>
                    Digital and Video Learning
                    <span><RiArrowRightUpFill /></span>
                </h1>
                <button onClick={() => setShowVideo(true)}>Play</button>
                {/* {<div className='mouse-container'>
                    <p>Scroll</p>
                    <span><MdOutlineMouse /></span>
                </div>} */}
            </div>
        </div>
    );
}
export default HeroSection;