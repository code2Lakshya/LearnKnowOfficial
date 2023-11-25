import useScrollToTop from "../../utils/hooks/useScrollToTop";
import OurClients from "../HomePage/OurClients/OurClients";
import HeroSectionReuse from "./HeroSectionReuse/HeroSectionReuse";
import OurApproach from "./OurApproach/OurApproach";
import OurTeam from "./OurTeam/OurTeam";
import OurVision from "./OurVision/OurVision";
import Solutions from "./Solutions/Solutions";



const AboutPage=()=>{

useScrollToTop();

    return(
        <div className="about-page">
           <HeroSectionReuse />
           <Solutions />
           <OurTeam />
           <OurVision />
           <OurClients />
           <OurApproach />
        </div>
    );
}
export default AboutPage;