import HeroSectionCommon from "../../components/HeroSectionCommon/HeroSectionCommon";
import src from '../../assets/bgPartnerr.mp4';
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
                to='/partner/#contact-us'
                btnName='Contact Us'
            />
            <LocateUs />
            <ContactUs />
            <OurClients />
        </div>
    );
}
export default PartnerPage;