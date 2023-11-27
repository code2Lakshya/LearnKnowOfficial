import HeroSectionCommon from "../../components/HeroSectionCommon/HeroSectionCommon";
import src from '../../assets/bgPartnerr.png';
import './PartnerPage.css';
import useScrollToTop from "../../utils/hooks/useScrollToTop";

const PartnerPage=()=>{

useScrollToTop();

    return(
        <div className="partner-page">
            <HeroSectionCommon heading='Partner With Us'  src={src} />
        </div>
    );
}
export default PartnerPage;