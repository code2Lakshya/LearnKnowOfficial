import HoverButton from '../../../components/HoverButton/HoverButton';
import './OurTeam.css';
import card1 from '../../../assets/card1.jpeg';
import card2 from '../../../assets/card2.jpeg';
import card3 from '../../../assets/card3.jpeg';
import card4 from '../../../assets/card4.jpeg';
import card5 from '../../../assets/card7.avif';
import card6 from '../../../assets/card6.jpg';
import { useNavigate } from 'react-router-dom';


const OurTeam = () => {

    const navigate = useNavigate();

    return (
        <section id='Our-Team'>
            <div className="our-team-wrapper">
                <div className="our-team-header">
                    <h3><span>Our Team</span><span>:</span></h3>
                    <p>
                        At LearnKnow Digital, we have assembled a team of passionate and talented professionals
                        who are the driving force behind our success. Committed to excellence, innovation, and
                        delivering exceptional eLearning solutions, our team brings a diverse range of expertise
                        and experiences to every project.
                    </p>
                    <p>
                        Our solutions are designed to be flexible, scalable, and future-proof. Whether you are a small business, a large corporation, or an educational institution, we have the expertise and resources to meet your specific needs. We stay up-to-date with the latest industry trends, technologies, and best practices to ensure that our solutions are always at the forefront of digital and video-based learning.
                    </p>
                    <p>
                        Partner with LearnKnow Digital today and experience the difference that our digital and video-based learning solutions can make in transforming your training programs. Together, we can enhance learner engagement, drive performance improvement, and foster a culture of continuous learning within your organization. Contact us now to embark on an exciting journey of learning transformation with LearnKnow Digital!
                    </p>
                </div>
                <div className="our-team-cards">
                    <div className="our-team-card">
                        <img src={card1} alt='team' />
                        <h6>Instructional designers Team </h6>
                        <p>
                            Our instructional designers are the architects of effective and engaging eLearning
                            experiences. With a deep understanding of instructional design principles, learning
                            theories, and adult learning methodologies, they collaborate closely with clients to
                            create learner-centric courses.
                        </p>
                        <button onClick={() => navigate('/partner')}>Contact Us</button>
                    </div>
                    <div className="our-team-card">
                        <img src={card2} alt='team' />
                        <h6>Subject Matter Experts Team</h6>
                        <p>
                            Our team includes subject matter experts from various industries who possess deep
                            domain knowledge and expertise. They work hand in hand with our instructional designers
                            to ensure that the content is accurate, up to date, and aligned with the specific
                            needs of our clients' industries.
                        </p>
                        <button onClick={() => navigate('/partner')}>Contact Us</button>
                    </div>
                    <div className="our-team-card">
                        <img src={card3} alt='team' />
                        <h6>Creative Multimedia Team</h6>
                        <p>
                            Our creative multimedia specialists bring visual appeal and interactivity to
                            our eLearning solutions. With expertise in graphic design, animation, video
                            production, and multimedia development, they transform concepts and ideas into
                            visually stunning and engaging digital content.
                        </p>
                        <button onClick={() => navigate('/partner')}>Contact Us</button>
                    </div>
                    <div className="our-team-card">
                        <img src={card4} alt='team' />
                        <h6>Diveristy & Inclusion</h6>
                        <p>
                            At LearnKnow Digital, We leverage technology to create immersive and interactive
                            learning experiences. Our technology and development experts stay at the forefront
                            of industry trends and emerging technologies.
                        </p>
                        <button onClick={() => navigate('/partner')}>Contact Us</button>
                    </div>
                    <div className="our-team-card">
                        <img src={card5} alt='team' />
                        <h6>Project Managers Team</h6>
                        <p>
                            Our dedicated project managers oversee the seamless execution of every project.
                            They are responsible for ensuring that timelines are met, resources are
                            allocated efficiently, and communication flows smoothly between all
                            stakeholders.
                        </p>
                        <button onClick={() => navigate('/partner')}>Contact Us</button>
                    </div>
                    <div className="our-team-card">
                        <img src={card6} alt='team' />
                        <h6>Account Managers Team</h6>
                        <p>
                            At LearnKnow Digital, collaboration is at the heart of our culture. Our team
                            members work closely together, exchanging ideas, insights, and best practices.
                            We value open communication, respect diverse perspectives, and encourage continuous
                            learning and professional development.
                        </p>
                        <button onClick={() => navigate('/partner')}>Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default OurTeam;