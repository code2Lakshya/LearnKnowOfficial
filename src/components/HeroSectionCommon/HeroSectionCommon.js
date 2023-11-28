import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './HeroSectionCommon.css';
import { HashLink } from "react-router-hash-link";

const HeroSectionCommon = ({ heading, description, src, to, btnName }) => {

    const navigate = useNavigate();

    const clickHandler=(e)=>{
        !to && navigate('/partner');
    }

    return (
        <div className="hero-common ">
            <div className="hero-common-wrapper ">
                <h1>{heading}</h1>
                <p>
                    {description}
                </p>
                <p>
                    <span>LearnKnow Digital </span>- Your Solution Partner for Digital & Video-Based Learning!
                </p>
                {
                    !to ?
                    <button onClick={clickHandler}> Contact Us </button>
                    :
                    <HashLink to={to} smooth>{btnName}</HashLink>
                }
            </div>
            <LazyLoadImage src={src} alt={heading} effect="blur" />
        </div>
    );
}
export default HeroSectionCommon;