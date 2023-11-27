import { useState } from "react";
import AccordianCard from "./AccordianCard/AccordianCard";
import './Accordian.css';

const Accordian = ({ content }) => {

    const [current, setCurrent] = useState(0);

    return (
        <div className="accordian">
            {
                content.map((item, index) => <AccordianCard
                    content={item}
                    current={current}
                    setCurrent={setCurrent}
                    index={index}
                    key={index}
                />)
            }
        </div>
    );
}
export default Accordian;