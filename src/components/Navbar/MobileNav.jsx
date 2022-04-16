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
 

const MobileNav = () => {
    const [active, setActive] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };
    

    return ( 
        <div>

            <nav className="MobileNavbarItem">
                <Link to="/"><h1 className="navbarlogo text-3xl"  > PAYNA</h1></Link>
                <Link className="icons"  to="/Cart" ><AiOutlineShoppingCart/></Link>
                <div className="menuicon" onClick={toggleLinks}> 
                {active ? <FaTimes/> : <RiBarChartHorizontalLine />}
                </div>
                <ul className={active ? "navmenu active": "navmenu"}>
                    <div>
                        <input type="text" placeholder="Search entire store...." />< AiOutlineSearch/>
                    </div>
                    <div>
                    <div>
                                <h1>Home</h1>
                                <p>Demo Group 01</p>
                                <p>Demo Group 02</p>
                                <p>Demo Group 03</p>
                            </div>
                            <div>
                                <h1>Shop</h1>
                                <p>Shop Layout</p>
                                <p>Product Layout</p>
                                <p>Shop Page</p>
                            </div>
                            <div>
                                <h1>Pages</h1>
                                <p>About Us</p>
                                <p>Contact US</p>
                                <p>FAQ</p>
                                <p>Coming Soon</p>
                                <p>Page 404</p>
                            </div>
                            <div>
                                <h1>Blog</h1>
                                <p>Blog Sidebar</p>
                                <p>Blog No Sidebar</p>
                                <p>Blog 03 Columns</p>
                                <p>Blog Mansory</p>
                                <p>Single Post</p>
                            </div>

                    </div>
                    
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
 
export default MobileNav;