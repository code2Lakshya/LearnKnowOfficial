import { Link } from "react-router-dom";
import './HoverButton.css';

const HoverButton=({heading,to})=>{

    return(
        <div className="hover-btn">
        <Link to={to}>{heading}</Link>
        </div>
    );
}
export default HoverButton;