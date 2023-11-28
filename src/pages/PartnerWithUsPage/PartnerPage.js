import HeroSectionCommon from "../../components/HeroSectionCommon/HeroSectionCommon";
import src from '../../assets/bgPartnerr.png';
import './PartnerPage.css';
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import LocateUs from "./LocatesUs/LocateUs";
import ContactUs from "./ContactUs/ContactUs";
import OurClients from '../../pages/HomePage/OurClients/OurClients';


const PartnerPage = () => {

    useScrollToTop();

    return (
        <div className="partner-page">
            <HeroSectionCommon
                heading='Partner With Us'
                src={src}
                to='/about-us'
                btnName='About Us'
            />
            <LocateUs />
            <ContactUs />
            <OurClients />
        </div>
    );
}
export default PartnerPage;