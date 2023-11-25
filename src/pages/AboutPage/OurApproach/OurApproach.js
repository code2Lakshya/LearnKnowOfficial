import HoverButton from "../../../components/HoverButton/HoverButton";
import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import './OurApproach.css';

const OurApproach = () => {

    return (
        <section id='Our-Approach'>
            <ScrollEffect className='approach-container' classNameInner='approach-wrapper'>
                <div className="approach-header">
                    <div className="approach-left">
                        <h1>Our Approach</h1>
                        <p>
                            Our team of experienced instructional designers and subject matter experts
                            collaborates closely with you to develop customized eLearning solutions tailored
                            to your unique requirements.
                        </p>
                    </div>
                    <HoverButton heading='See All Blogs' to='/blog' />
                </div>
                <div className="approach-cards">
                    <div className="approach-card">
                        <span><i className="fas fa-atom"></i></span>
                        <div className="card-content">
                            <h3>Innovation in Technology</h3>
                            <p>
                                We embrace the latest advancements in technology to enhance the eLearning
                                experience. From interactive modules and gamification elements to virtual reality.
                            </p>
                        </div>
                    </div>
                    <div className="approach-card">
                        <span><i className="fas fa-key"></i></span>
                        <div className="card-content">
                            <h3>Creative Multimedia Solutions</h3>
                            <p>
                                We believe that visual appeal and interactivity are key drivers of learner engagement. Our talented team of designers, animators, and multimedia specialists.
                            </p>
                        </div>
                    </div>
                    <div className="approach-card">
                        <span><i className="fas fa-newspaper"></i></span>
                        <div className="card-content">
                            <h3>Excellence in Custom Content eLearning</h3>
                            <p>
                                Customization is at the heart of what we do. We work closely with our clients to understand their objectives, target audience, and desired outcomes.
                            </p>
                        </div>
                    </div>
                    <div className="approach-card">
                        <span><i className="fas fa-link"></i></span>
                        <div className="card-content">
                            <h3>Commitment to Quality</h3>
                            <p>
                                Quality is ingrained in everything we do. We have rigorous quality assurance processes in place to ensure that our eLearning solutions meet the highest standards of accuracy, usability.
                            </p>
                        </div>
                    </div>
                    <div className="approach-card">
                        <span><i className="far fa-handshake"></i></span>
                        <div className="card-content">
                            <h3>Collaborative Partnership</h3>
                            <p>
                                At LearnKnow Digital, we believe in forging strong partnerships with our clients. We view ourselves as an extension of your team, working closely with you throughout the development process.
                            </p>
                        </div>
                    </div>
                    <div className="approach-card">
                        <span><i className="fas fa-chart-bar"></i></span>
                        <div className="card-content">
                            <h3>Global Impact</h3>
                            <p>
                                Our eLearning solutions have made a positive impact on organizations and learners around the globe. We have had the privilege of partnering with leading companies across industries.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollEffect>
        </section>
    );
}
export default OurApproach;