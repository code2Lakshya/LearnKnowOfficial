import { LazyLoadImage } from "react-lazy-load-image-component";
import './Navbar.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import imgSrc from '../../assets/logo2.png';
import { Link } from "react-router-dom";
import HoverList from "../HoverList/HoverList";
import { useEffect, useState } from "react";
import {CiMenuBurger} from 'react-icons/ci';
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [menu,setMenu]=useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > window.innerHeight ? setNavbar(true) : setNavbar(false)
        })
    }, [])

    return (
        <header className={navbar ? 'active':''}>
            <nav>
                <div className="navbar-image">
                   <Link to='/'><LazyLoadImage src={imgSrc} alt='logo' effect="blur" /></Link>
                </div>
                <ul id='nav-list' className={menu? 'active':''}>
                    <li onClick={()=>setMenu(false)}><Link to='/'>Home</Link></li>
                    <li onClick={()=>setMenu(false)}><HoverList heading='About' list={['Our Team', 'Our Vision', 'Our Approach', 'Culture And Growth']} to='about-us' /></li>
                    <li onClick={()=>setMenu(false)}><Link to='/services'>Services</Link></li>
                    {/* <li onClick={()=>setMenu(false)}><Link to='/blog'>Blog</Link></li> */}
                    <li onClick={()=>setMenu(false)}><Link to='/careers'>Careers</Link></li>
                    <li onClick={()=>setMenu(false)}><Link to='/partner'>Partner With Us</Link></li>
                    <li onClick={()=> setMenu(false)}><RxCross2 /></li>
                </ul>
                <span onClick={()=> setMenu(true)}><CiMenuBurger /></span>
            </nav>
        </header>
    );
}
export default Navbar;