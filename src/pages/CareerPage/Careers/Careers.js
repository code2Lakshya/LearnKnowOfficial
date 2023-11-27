import { useState } from "react";
import OurServicesBtn from "../../HomePage/OurServices/OurServicesBtn/OurServicesBtn";
import { careers } from "../../../utils/variables";
import './Careers.css';
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import src1 from '../../../assets/career1.jpeg';
import src2 from '../../../assets/career2.jpeg';
import src3 from '../../../assets/career3.png';
import src4 from '../../../assets/career4.webp';
import src5 from '../../../assets/career5.jpeg';
import src6 from '../../../assets/career6.png';


const images = [src1, src2, src3, src4, src5, src6];
const Careers = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id='Careers'>
            <ScrollEffect className='career-container' classNameInner='career-wrapper'>
                <div className="career-heading">
                    <h1>Careers</h1>
                    <p>
                        For any career related information, write to us at :
                        <a href='mailto:hrd@learnknowdigital.com'>hrd@learnknowdigital.com</a>
                    </p>
                </div>
                <div className="career-cards">
                    <div className="career-cards-heading">
                        {
                            careers.map((item, index) => {
                                return <OurServicesBtn setActiveTab={setActiveTab} heading={item.heading} activeTab={activeTab} item={index} key={index} />
                            })}
                    </div>
                    <div className="career-cards-content">
                        <img src={images[activeTab]} alt={careers[activeTab].heading} />
                        {
                            <p>{careers[activeTab].desc}</p>
                        }
                    </div>
                </div>
            </ScrollEffect>
        </section>
    );
}
export default Careers;