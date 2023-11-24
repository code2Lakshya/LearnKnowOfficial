import useScrollToTop from "../../utils/hooks/useScrollToTop";
import HeroSectionReuse from "./HeroSectionReuse/HeroSectionReuse";
import Solutions from "./Solutions/Solutions";



const AboutPage=()=>{

useScrollToTop();

    return(
        <div className="about-page">
           <HeroSectionReuse />
           <Solutions />
        </div>
    );
}
export default AboutPage;