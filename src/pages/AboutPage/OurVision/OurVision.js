import { useNavigate } from "react-router-dom";
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import {vision} from '../../../utils/variables';
import './OurVision.css';


const OurVision = () => {

const navigate=useNavigate();

    return (
        <section id='Our-Vision'>
            <ScrollEffect className='our-vision-container' classNameInner='wrapper'>
                <div className="whyus-heading">
                    <h1>Our Vision</h1>
                    <p>Why Choose Learn Know Digital ?</p>
                </div>
                <div className="whyus-cards">
                    {
                        vision.map((item, index) => <div className={`whyus-card card${index}`} key={index}>
                            <h3>{item.heading}</h3>
                            <p>{item.desc}</p>
                            <button onClick={()=> navigate('/partner')}>Contact Us</button>
                        </div>)
                    }
                </div>
            </ScrollEffect>
        </section>
    );
}
export default OurVision;