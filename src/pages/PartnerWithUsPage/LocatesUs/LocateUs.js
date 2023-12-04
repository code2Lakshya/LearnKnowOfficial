import { useState } from "react";
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import src1 from '../../../assets/locate2.png';
import src2 from '../../../assets/locate3.png';
import src3 from '../../../assets/locate4.png';
import OurServicesBtn from "../../HomePage/OurServices/OurServicesBtn/OurServicesBtn";
import { location } from "../../../utils/variables";
import './LocateUs.css';

const images = [ src1, src2, src3];

const LocateUs = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <ScrollEffect className='location-container' classNameInner='location-wrapper'>
            <h1>Locate Us</h1>
            <p>We are spreading globally !!</p>
            <div className="location-cards">
                <div className="location-button">
                    {
                        location.map((item, index) => <OurServicesBtn
                            setActiveTab={setActiveTab}
                            heading={item.heading}
                            activeTab={activeTab}
                            item={index}
                            key={index}
                        />)
                    }
                </div>
                <div className="location-detail">
                    <img src={images[activeTab]} alt={images[activeTab].heading} />
                    <p>{location[activeTab].desc}</p>
                </div>
            </div>
        </ScrollEffect>
    );
}
export default LocateUs;