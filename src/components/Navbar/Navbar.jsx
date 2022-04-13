import { useState } from "react";
import { Link } from "react-router-dom";
import {ImFacebook} from "react-icons/im";
import {BsInstagram} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineDribbble} from "react-icons/ai";
import {RiBarChartHorizontalLine} from "react-icons/ri"
import {  FaTimes } from "react-icons/fa";
import  "./navbar.scss";
 

const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };
    

    return ( 
        <div>
            <nav className="NavbarItems">
                <div className="Part"> 
                    <ul className="navmenu">
                        <div className="menuicon" onClick={toggleLinks}> 
                        {active ? <FaTimes/> : <RiBarChartHorizontalLine />}
                        </div>
                        <li>
                            <a href="https://github.com/Te-Stack" className="navlinks"><ImFacebook/></a>
                        </li>
                        <li>
                            <a className="navlinks" href="https://github.com/Te-Stack" ><BsInstagram/></a>
                        </li> 
                        <li>
                            <a className="navlinks" href="https://github.com/Te-Stack"><BsGithub/></a>
                        </li>
                        <li>
                            <a className="navlinks" href="https://github.com/Te-Stack"><AiOutlineDribbble/></a>
                        </li>    
                    </ul>
                </div>
                <Link to="/"><h1 className="navbarlogo text-3xl "  > PAYNA</h1></Link>
                    <div className="Search">
                    <p>English <span>/italy</span></p>
                    <div className="icons">
                        < AiOutlineSearch/>
                    </div>
                    
                    <Link className="icons" to="/Cart" ><AiOutlineShoppingCart/></Link>
                </div>
                
                   
            </nav>

            <nav className="MobileNavbarItem">
                <Link to="/"><h1 className="navbarlogo"  > PAYNA</h1></Link>
                <AiOutlineShoppingCart/>
                <div className="menuicon" onClick={toggleLinks}> 
                {active ? <FaTimes/> : <RiBarChartHorizontalLine />}
                </div>
                <ul className={active ? "navmenu active": "navmenu"}>
                    <li>
                        <a href="https://github.com/Te-Stack" className="navlinks"><ImFacebook/></a>
                    </li>
                    <li>
                        <a className="navlinks" href="https://github.com/Te-Stack"><BsInstagram/></a>
                    </li> 
                    <li>
                        <a className="navlinks" href="https://github.com/Te-Stack"><BsGithub/></a>
                    </li>
                    <li>
                        <a className="navlinks" href="https://github.com/Te-Stack"><AiOutlineDribbble/></a>
                    </li>    
                </ul>
            </nav>
            
        </div>
     );
}
 
export default Navbar;