import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './OurServicesContent.css';
import { useNavigate } from "react-router-dom";


const OurServicesContent = ({ content, src, heading }) => {

const navigate=useNavigate();

    return (
        <div className="ourServices-content">
            <div className="ourServices-image" onClick={()=>navigate('/services')}>
                <LazyLoadImage src={src} alt='services' effect="blur" />
                <div className="ourServices-hover">
                    <div>
                        <h3>{heading}</h3>
                        <p>Services</p>
                    </div>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <p>
                {content}
            </p>
        </div>
    );
}
export default OurServicesContent;