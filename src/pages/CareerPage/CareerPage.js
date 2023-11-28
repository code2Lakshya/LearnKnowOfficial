import HeroSectionCommon from "../../components/HeroSectionCommon/HeroSectionCommon";
import src from '../../assets/bgCareerrr.png';
import useScrollToTop from "../../utils/hooks/useScrollToTop";
import Careers from "./Careers/Careers";
import Internships from "./Internships/Internships";


const CareerPage = () => {

    useScrollToTop();

    return (
        <div className="career-page">
            <HeroSectionCommon
                heading='Careers'
                description='A career at Learknow Digital offers exciting opportunities for growth, learning, and professional development.'
                src={src}
            />
            <Careers />
            <Internships />
        </div>
    );
}
export default CareerPage;