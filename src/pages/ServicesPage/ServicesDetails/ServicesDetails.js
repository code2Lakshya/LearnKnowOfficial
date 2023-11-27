import { useState } from "react";
import HoverButton from "../../../components/HoverButton/HoverButton";
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import OurServicesBtn from "../../HomePage/OurServices/OurServicesBtn/OurServicesBtn";
import { servicesInDetail } from "../../../utils/variables";
import Accordian from "../../../components/Accordian/Accordian";
import './ServicesDetails.css';
import imgSrc1 from '../../../assets/service1.jpeg';
import imgSrc2 from '../../../assets/service2.jpeg';
import imgSrc3 from '../../../assets/service3.jpeg';
import imgSrc4 from '../../../assets/service4.jpeg';
import imgSrc5 from '../../../assets/service5.png';
import imgSrc6 from '../../../assets/service6.jpeg';
import imgSrc7 from '../../../assets/service7.jpeg';
import imgSrc8 from '../../../assets/card4.jpeg';
import imgSrc9 from '../../../assets/service9.jpeg';


const imgArray = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6, imgSrc7, imgSrc8, imgSrc9];
const ServicesDetails = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id='service-details'>
            <ScrollEffect className='service-details-container' classNameInner='service-details-wrapper'>
                <div className="service-detail-heading">
                    <div className="service-left">
                        <h1> Our Specializations</h1>
                        <p>
                            We create cutting-edge learning
                        </p>
                    </div>
                    <HoverButton heading='Contact Us' to='/partner' />
                </div>
                <div className="service-detail-content">
                    <div className="service-detail-cards">
                        {
                            servicesInDetail.map((item, index) => {
                                return <OurServicesBtn setActiveTab={setActiveTab} heading={item.heading} activeTab={activeTab} item={index} key={index} />
                            })}
                    </div>
                    <div className="current-service">
                    <img src={imgArray[activeTab]} alt='service' />
                        {
                            servicesInDetail[activeTab].content.length > 1
                                ?
                                <Accordian content={servicesInDetail[activeTab].content} />
                                :
                                    <p>
                                        {servicesInDetail[activeTab].content[0]}
                                    </p>
                        }
                    </div>
                </div>
            </ScrollEffect>
        </section>
    );
}
export default ServicesDetails;