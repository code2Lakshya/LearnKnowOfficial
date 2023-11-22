import { useState } from "react";
import OurServicesBtn from "./OurServicesBtn/OurServicesBtn";
import imgSrc1 from '../../../assets/video.jpeg';
import imgSrc2 from '../../../assets/e-learn.jpeg';
import imgSrc3 from '../../../assets//design.jpg';
import OurServicesContent from "./OurServicesContent/OurServicesContent";
import './OurServices.css';
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";


const OurServices = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
            <ScrollEffect  className="our-services-wrapper" classNameInner="our-services-container">
                <div className="our-services-btn">
                    <h3>About Our <span>Services</span></h3>
                    <OurServicesBtn setActiveTab={setActiveTab} heading='video production' activeTab={activeTab} item={0} />
                    <OurServicesBtn setActiveTab={setActiveTab} heading='e-learning' activeTab={activeTab} item={1} />
                    <OurServicesBtn setActiveTab={setActiveTab} heading='design-agency' activeTab={activeTab} item={2} />
                </div>
                <div className="our-services-display">
                    {
                        activeTab === 0 &&
                        <OurServicesContent content='A wide range of services comes under video production where 
                there will be plug in and play content for our learners to take learning notes straight 
                from the instructor. With proper knowledge and strong interaction between our ID team and
                 SME team we promise to deliver the best courses with proper learning objectives and 
                 learning outcomes.' src={imgSrc1}  heading='video production'/>
                    }
                    {
                        activeTab === 1 &&
                        <OurServicesContent content=' Integration of corporate E-Learning modules into training 
                 programs, from instructional note, developing interactivity and gamification module. 
                 We give a wide range of e learning services.' src={imgSrc2} heading='e-learning'/>
                    }
                    {
                        activeTab === 2 &&
                        <OurServicesContent content=' We also provide corporate event management 
                 solutions as with the strongest team of cinematographers and photographers the service 
                 outcome is top-notch. ' src={imgSrc3} heading='design-agency'/>
                    }
                </div>
</ScrollEffect>
    );
}
export default OurServices;