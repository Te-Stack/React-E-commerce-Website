import { useState } from "react";
import { Link } from "react-router-dom";
import {ImFacebook} from "react-icons/im";
import {BsInstagram} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineDribbble} from "react-icons/ai";
import {RiBarChartHorizontalLine} from "react-icons/ri"
import { FaBars, FaTimes } from "react-icons/fa";
import  "./navbar.scss";
import "../button/Button"





const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };
    

    return ( 
        <>
        <nav className="NavbarItems">
            <Link href="/"><h1 className="navbarlogo"  > PAYNA</h1></Link>
            <div className="menuicon" onClick={toggleLinks}> 
            {active ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={active ? "navmenu active": "navmenu"}>
                <li>
                    <Link href="#"><a className="navlinks">Pricing</a></Link>
                </li>
                <li>
                    <Link  href="#"><a className="navlinks">Product</a></Link>
                </li> 
                <li>
                    <Link href="#"><a className="navlinks">About Us</a></Link>
                </li>
                <li>
                    <Link href="#"><a className="navlinks">Careers</a></Link>
                </li>
                <li>
                    <Link href="#"><a className="navlinks">Community</a></Link>
                </li>      
            </ul>
            <Button text={"Get Started"} />      
        </nav>

        <nav>

        </nav>
            
        </>
     );
}
 
export default Navbar;