import { useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import { RxCross2 } from 'react-icons/rx';
import './HomePage.css';
import OurServices from "./OurServices/OurServices";
import HomeCards from "./HomeCards/HomeCards";
import OurClients from "./OurClients/OurClients";

const HomePage = () => {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="home-page margin-top">
            <HeroSection setShowVideo={setShowVideo} />
            {
                showVideo && <div className="video-frame">
                    <div className="video-container">
                        <span onClick={() => setShowVideo(false)}><RxCross2 /></span>
                        <div className="video">
                        <iframe
                            src="https://www.youtube.com/embed/Sgd3wFiyzJ8?si=bgi5C_bjewqowHzk"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        >
                        </iframe>
                        </div>
                    </div>
                </div>
            }
            <OurServices />
            <HomeCards />
            <OurClients />
        </div>
    );
}
export default HomePage;