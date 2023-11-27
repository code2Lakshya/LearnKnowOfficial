import useScrollToTop from "../../utils/hooks/useScrollToTop";
import HeroServices from "./HeroServices/HeroServices";
import ServiceCards from "./ServicesCards/ServicesCards";
import ServicesDetails from "./ServicesDetails/ServicesDetails";



const ServicesPage=()=>{

useScrollToTop();

    return(
        <div className="services-page">
        <HeroServices />
        <ServiceCards />
        <ServicesDetails />
        </div>
    );
}
export default ServicesPage;