import ScrollEffect from "../../../components/ScrollEffect/ScrollEffect";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import './Testimonial.css';
import { useState } from "react";


const Testimonial = () => {

    const [transform, setTransform] = useState(0);

    const clickHandler = (direction) => {
        if (direction === 'left') {
            if (transform !== 0) {
                setTransform(prev => prev - 1);
            }
            else {
                setTransform(3);
            }
        }
        else {
            if (transform !== 3) {
                setTransform(prev => prev + 1);
            }
            else {
                setTransform(0);
            }
        }
    }

    return (
        <ScrollEffect className='testimonial-container' classNameInner='testimonial-wrapper'>
            <h3>What Our Client Say</h3>
            <div className="testimonial-cards-wrapper" >
                <div
                    className="testimonial-cards"
                    style={{ transform: `translateX(-${transform * 25}%)` }}
                >
                    <div className="testimonial-card">
                        <p>
                            "Our office is something we are pleased with. We consider it the little magnet; it
                            is wanting to come here and afterward difficult to leave it. Our office is additionally
                            a big name."
                        </p>
                        <div className="card-footer">
                            <h3>Ishaan Shankar Srivastava</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={`testimonial-card`}>
                        <p>
                            "Our office is something we are pleased with. We consider it the little magnet; it
                            is wanting to come here and afterward difficult to leave it. Our office is additionally
                            a big name."
                        </p>
                        <div className="card-footer">
                            <h3>Raju Rastogi</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={`testimonial-card`}>
                        <p>
                            "Our office is something we are pleased with. We consider it the little magnet; it
                            is wanting to come here and afterward difficult to leave it. Our office is additionally
                            a big name."
                        </p>
                        <div className="card-footer">
                            <h3>Deep Kamal</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                    <div className={`testimonial-card`}>
                        <p>
                            "Our office is something we are pleased with. We consider it the little magnet; it
                            is wanting to come here and afterward difficult to leave it. Our office is additionally
                            a big name."
                        </p>
                        <div className="card-footer">
                            <h3>Divyansh Gupta</h3>
                            <p>UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-btn">
                <span onClick={() => clickHandler('left')}><MdArrowBackIos /></span>
                <span onClick={() => clickHandler('right')}><MdArrowForwardIos /></span>
            </div>
        </ScrollEffect>
    );
}
export default Testimonial;