import { useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import { RxCross2 } from 'react-icons/rx';


const HomePage = () => {

    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="home-page margin-top">
            <HeroSection setShowVideo={setShowVideo}/>
            {
                showVideo && <div className="video-frame">
                    <div className="video-container">
                        <span onClick={() => setShowVideo(false)}><RxCross2 /></span>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Sgd3wFiyzJ8?si=bgi5C_bjewqowHzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            }
        </div>
    );
}
export default HomePage;