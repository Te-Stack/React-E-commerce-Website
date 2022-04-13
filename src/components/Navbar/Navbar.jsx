import { useState } from "react";
// import { Link } from "react-router-dom";
import {ImFacebook} from "react-icons/im";
import {BsInstagram} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineDribbble} from "react-icons/ai";
import {RiBarChartHorizontalLine} from "react-icons/ri"
import { FaBars } from "react-icons/fa";
import  "./navbar.scss";


const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };
    

    return ( 
        <>
        <nav className="NavbarItems">
            <Link to="/"><h1 className="navbarlogo"  > PAYNA</h1></Link>
            <div className="menuicon" onClick={toggleLinks}> 
            {active ? <RiBarChartHorizontalLine /> : <FaBars />}
            </div>
            <ul className={active ? "navmenu active": "navmenu"}>
                <li>
                    <Link to="#" className="navlinks"><ImFacebook/></Link>
                </li>
                <li>
                    <Link className="navlinks"  to="#"><BsInstagram/></Link>
                </li> 
                <li>
                    <Link className="navlinks" to="#"><BsGithub/></Link>
                </li>
                <li>
                    <Link className="navlinks" to="#"><AiOutlineDribbble/></Link>
                </li>    
            </ul>
            <AiOutlineSearch/>
            <AiOutlineShoppingCart/>    
        </nav>

        <nav className="NavbarItem1">
        <Link to="/"><h1 className="navbarlogo"  > PAYNA</h1></Link>
            <AiOutlineShoppingCart/>
            <div className="menuicon" onClick={toggleLinks}> 
            {active ? <RiBarChartHorizontalLine/> : <FaBars />}
            </div>
            <ul className={active ? "navmenu active": "navmenu"}>
            <li>
                    <Link to="#" className="navlinks"><ImFacebook/></Link>
                </li>
                <li>
                    <Link className="navlinks"  to="#"><BsInstagram/></Link>
                </li> 
                <li>
                    <Link className="navlinks" to="#"><BsGithub/></Link>
                </li>
                <li>
                    <Link className="navlinks" to="#"><AiOutlineDribbble/></Link>
                </li>    
            </ul>
        </nav>
            
        </>
     );
}
 
export default Navbar;