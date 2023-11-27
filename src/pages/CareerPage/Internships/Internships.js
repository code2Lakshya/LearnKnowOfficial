import { useNavigate } from "react-router-dom";
import HoverButton from "../../../components/HoverButton/HoverButton";
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import { internship } from "../../../utils/variables";
import './Internships.css';


const Internships=()=>{

const navigate=useNavigate();

    return(
        <section id='Internships'>
        <ScrollEffect className='internships-container' classNameInner='internships-wrapper'>
            <div className="internship-heading">
                <h1>Internship</h1>
                <HoverButton heading='Join Us' to='mailto:hrd@learnknowdigital.com' />
            </div>
            <div className="whyus-cards internship-details">
                    {
                        internship.map((item, index) => <div className={`whyus-card card${index}`} key={index}>
                            <h3>{item.heading}</h3>
                            <p>{item.desc}</p>
                            <button onClick={()=> navigate('/blogs')}>Contact Us</button>
                        </div>)
                    }
                </div>
        </ScrollEffect>
        </section>
    );
}
export default Internships;