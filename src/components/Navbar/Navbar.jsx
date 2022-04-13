import { useState } from "react";
import { Link } from "react-router-dom";
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
        <div>
            <nav className="NavbarItems">
                <Link to="/"><h1 className="navbarlogo"  > PAYNA</h1></Link>
                <div className="menuicon" onClick={toggleLinks}> 
                {active ? <RiBarChartHorizontalLine /> : <FaBars />}
                </div>
                <ul className={active ? "navmenu active": "navmenu"}>
                    <li>
                        <a href="#" className="navlinks"><ImFacebook/></a>
                    </li>
                    <li>
                        <a className="navlinks" href="#" ><BsInstagram/></a>
                    </li> 
                    <li>
                        <a className="navlinks" href="#"><BsGithub/></a>
                    </li>
                    <li>
                        <a className="navlinks" href="#"><AiOutlineDribbble/></a>
                    </li>    
                </ul>
                <div>
                <AiOutlineSearch/>
                <Link to="/Cart" ><AiOutlineShoppingCart/></Link>
                </div>
                
                   
            </nav>

            <nav className="NavbarItem1">
                <Link to="/"><h1 className="navbarlogo"  > PAYNA</h1></Link>
                <AiOutlineShoppingCart/>
                <div className="menuicon" onClick={toggleLinks}> 
                {active ? <RiBarChartHorizontalLine/> : <FaBars />}
                </div>
                <ul className={active ? "navmenu active": "navmenu"}>
                    <li>
                        <a href="#" className="navlinks"><ImFacebook/></a>
                    </li>
                    <li>
                        <a className="navlinks" href="#"><BsInstagram/></a>
                    </li> 
                    <li>
                        <a className="navlinks" href="#"><BsGithub/></a>
                    </li>
                    <li>
                        <a className="navlinks" href="#"><AiOutlineDribbble/></a>
                    </li>    
                </ul>
            </nav>
            
        </div>
     );
}
 
export default Navbar;