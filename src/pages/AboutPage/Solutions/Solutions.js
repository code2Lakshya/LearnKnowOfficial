import { LazyLoadImage } from 'react-lazy-load-image-component';
import ScrollEffect from '../../../components/ScrollEffect/ScrollEffect';
import 'react-lazy-load-image-component/src/effects/blur.css';
import globe from '../../../assets/globe.gif';
import CounterCard from '../../../components/CounterCard/CounterCard';
import './Solutions.css';

const Solutions = () => {

    return (
        <ScrollEffect className='solutions' classNameInner='solutions-wrapper'>
            <h1>Our Solutions for <span>Your growth</span></h1>
            <div className="solutions-header">
                <div className='solutions-image'>
                    <LazyLoadImage src={globe} alt='globe' effect='blur' />
                </div>
                <div className='solutions-cards'>
                    <CounterCard max={280} heading='Work Hours' className='solutions-card' key='0'/>
                    <CounterCard max={120} heading='Post Production' className='solutions-card' key='1'/>
                    <CounterCard max={70} heading='eLearning Projects' className='solutions-card' key='2' />
                    <CounterCard max={90} heading='2D Animation' className='solutions-card' key='3'/>
                </div>
            </div>
            <p>
                At LearnKnow Digital, we understand that traditional training methods alone may not suffice in
                today's fast-paced and dynamic world. That's why we specialize in leveraging the power of digital
                technologies and video production to create immersive learning experiences that captivate learners
                and drive knowledge retention. We believe in the transformative power of visual storytelling,
                interactive content, and cutting-edge technologies to enhance learning outcomes.
            </p>
            <p>
                Our team of experienced professionals is dedicated to crafting tailor-made solutions that align
                with your unique training needs and objectives. Whether you require custom content eLearning,
                video production, instructional design, or gamification, we have the expertise to deliver
                high-quality and impactful learning experiences. We blend creativity, innovation, and
                instructional design principles to create engaging courses that resonate with learners across
                diverse industries and domains.
            </p>
        </ScrollEffect>
    );
}
export default Solutions;