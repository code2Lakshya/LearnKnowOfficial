import { useEffect, useRef, useState } from "react";
import './ScrollEffect.css';


const ScrollEffect = ({ children, className, classNameInner }) => {

    const elem = useRef(0);
    const [showItem, setShowItem] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            if(elem)
            elem.current?.getBoundingClientRect()?.top - 170 <= window.innerHeight && setShowItem(true)
        }
        window.addEventListener('scroll', checkScroll)
        return () => window.removeEventListener('scroll', checkScroll)
    }, [])

    return (
        <div className={`hover-effect-container ${className ? className : ''}`}>
            <div className={`hover-effect-wrapper ${classNameInner ? classNameInner : ''}  ${showItem ? 'active' : ''}`} ref={elem}>
                {children}
            </div>
        </div>
    );
}
export default ScrollEffect;