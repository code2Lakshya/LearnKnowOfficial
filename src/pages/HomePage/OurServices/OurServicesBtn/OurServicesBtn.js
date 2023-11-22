import { IoIosArrowForward } from "react-icons/io";
import './OurServicesBtn.css';

const OurServicesBtn=({setActiveTab,heading,activeTab,item})=>{

    return(
        <div className={`ourServices-btn ${activeTab===item ? 'active':''}`} onClick={()=> setActiveTab(item)}>
        <p>{heading}</p>
        <span><IoIosArrowForward /></span>
        </div>
    );
}
export default OurServicesBtn;