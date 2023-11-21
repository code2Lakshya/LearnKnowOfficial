import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import './HoverList.css';
import { IoIosArrowDown } from 'react-icons/io';

const HoverList = ({ heading, list, to }) => {

    const [showList, setShowList] = useState(false);

    return (
        <div className="hover-list-wrapper" onMouseOver={() => setShowList(true)} onMouseLeave={() => setShowList(false)}>
            <h1>
                <Link to={`/${to}`}>{heading}</Link>
                <span><IoIosArrowDown /></span>
            </h1>
            <ul className={`hover-list ${showList ? 'active' : ''}`}>
                {
                    list.map((item, index) => <li key={index}>
                        <HashLink to={`/${to}#${item.replaceAll(' ', '-')}`}>{item}</HashLink>
                    </li>)
                }
            </ul>
        </div>
    );
}
export default HoverList;