import { useState } from "react";
import { Link } from "react-router-dom";
import {ImFacebook} from "react-icons/im";
import {BsInstagram} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {AiOutlineShoppingCart,AiOutlineAlignLeft,AiOutlineClose,AiOutlineDribbble,AiOutlineSearch,AiOutlineDown,AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import  "./navbar.scss";
import MobileNav from "./MobileNav"
 

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    const toggleLinks = () => {
        setActive(!active);
      };
    const toggleLinks1 = () => {
        setActive1(!active1);
      };
    const toggleLinks2= () => {
        setActive2(!active2);
      };
    
    const toggleLinks3= () => {
        setActive3(!active3);
      };
    const toggleLinks4= () => {
        setActive4(!active4);
      };
    

    return ( 
        <div>
            <nav className="NavbarItems">
                <div className="Part"> 
                    <ul className="navmenu">
                        <div className="menuicon" onClick={toggleLinks}> 
                        {active ? <AiOutlineClose/> : <AiOutlineAlignLeft/>}
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
            <div className={active? "broad active" :"broad"}>
                            <div>
                                <div className="p1" onClick={toggleLinks1}>
                                <h1>Home</h1>
                                <div className="drop"><AiOutlineDown/></div>
                                </div>
                                <div className={active1 ? "show" : "show active" }>
                                    <p>Demo Group 01</p>
                                    <p>Demo Group 02</p>
                                    <p>Demo Group 03</p>
                                </div>
                            </div>
                            <div>
                            <div className="p1" onClick={toggleLinks2}>
                                <h1>Shop</h1>
                                <div className="drop"><AiOutlineDown/></div>
                                </div>
                                <div className={active2 ? "show" : "show active" }>
                                    <p>Shop Layout</p>
                                    <p>Product Layout</p>
                                    <p>Shop Page</p>
                                </div>
                            </div>
                            <div>
                                <div className="p1" onClick={toggleLinks3}>
                                    <h1>Pages</h1>
                                    <div className="drop"><AiOutlineDown/></div>
                                    </div>
                                    <div className={active3 ? "show" : "show active" }>
                                        <p>About Us</p>
                                        <p>Contact Us</p>
                                        <p>FAQ</p>
                                        <p>Coming Soon</p>
                                        <p>Page 404</p>
                                </div>
                            </div>
                            <div>
                                <div className="p1" onClick={toggleLinks3}>
                                    <h1>Blog</h1>
                                    <div className="drop"><AiOutlineDown/></div>
                                    </div>
                                    <div className={active3 ? "show" : "show active" }>
                                        <p>Blog Sidebar</p>
                                        <p>Blog No Sidebar</p>
                                        <p>Blog 03 Columns</p>
                                        <p>Blog Mansory</p>
                                        <p>Single Post</p>
                                </div>
                            </div>

                        </div>

            <MobileNav/>
            
        </div>
     );
}
 
export default Navbar;