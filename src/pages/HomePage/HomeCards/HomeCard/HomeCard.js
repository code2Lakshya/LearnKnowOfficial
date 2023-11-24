import { IoIosArrowRoundForward } from "react-icons/io";
import './HomeCard.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useNavigate } from "react-router-dom";

const HomeCard = ({ heading, src ,to}) => {

const navigate=useNavigate();

    return (
        <div className="home-card" onClick={()=>navigate(to)}>
            <LazyLoadImage src={src} alt='home' effect="blur" />
            <p>{heading} <span><IoIosArrowRoundForward /></span></p>
            <i className="fas fa-arrow-right"></i>
        </div>
    );
}
export default HomeCard;