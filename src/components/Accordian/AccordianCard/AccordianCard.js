import './AccordianCard.css';
import { IoMdArrowDropdown,IoMdArrowDropup } from "react-icons/io";



const AccordianCard = ({ content, current, setCurrent, index }) => {

    return (
        <div className="accordian-card">
            <div className="accordian-card-heading" onClick={() => setCurrent(prev => prev === index ? null : index)}>
                <h3>{content.heading}</h3>
                <span data-testid='accordian-btn'>
                    {current === index ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </span>
            </div>
            {
                current === index &&
                <div className="accordian-card-content">
                    {content.desc}
                </div>
            }
        </div>
    );
}
export default AccordianCard;