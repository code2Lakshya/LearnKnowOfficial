import { useState } from "react";
import { servicesHeading } from "../../../utils/variables";
import ServiceCard from "./ServiceCard/ServiceCard";
import './ServicesCards.css';
import { useNavigate } from "react-router-dom";

const Services=()=>{

const [currentCard,setCurrentCard]=useState(1);
const navigate=useNavigate();

return(
    <section className="services-cards-container">
        <div className="services-cards-wrapper">
            <div className="services-cards-heading">
                <h1>Our Services</h1>
                <p>We’re in the business of helping companies grow. Here is some of our specialization.</p>
                <button onClick={()=>navigate('/partner')}>Contact Us</button>
            </div>
            <div className="services-cards">
            {
                servicesHeading.map((item,index)=><ServiceCard 
                heading={item} 
                index={index+1} 
                currentCard={currentCard} 
                setCurrentCard={setCurrentCard} 
                key={index}/>)
            }
            </div>
        </div>
    </section>
);
}
export default Services;