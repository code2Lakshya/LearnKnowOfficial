import HeroSectionCommon from "../../components/HeroSectionCommon/HeroSectionCommon";
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import ServiceCards from "./ServicesCards/ServicesCards";
import ServicesDetails from "./ServicesDetails/ServicesDetails";
import bgSrc from '../../assets/bgServices.mp4';


const ServicesPage=()=>{

useScrollToTop();

    return(
        <div className="services-page">
        <HeroSectionCommon heading='Services' description='  We create cutting-edge learning' src={bgSrc} />
        <ServiceCards />
        <ServicesDetails />
        </div>
    );
}
export default ServicesPage;