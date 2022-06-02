import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {ImFacebook} from "react-icons/im";
import {BsInstagram} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {AiOutlineShoppingCart,AiOutlineAlignLeft,AiOutlineClose,AiOutlineDribbble,AiOutlineSearch,AiOutlineDown,AiOutlineUp} from "react-icons/ai";
import  "./navbar.scss";
import MobileNav from "./MobileNav";
import logo from "../../assets/images/logo/logo.png";
import CartContext from "../../context/cart/CartContext";

 

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(true);
    const [active6, setActive6] = useState(true);
    const [active7, setActive7] = useState(true);

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

    const toggleLinks5= () => {
        setActive5(!active5);
      };
    const toggleLinks6= () => {
        setActive6(!active6);
      };
    const toggleLinks7= () => {
        setActive7(!active7);
      };

    // Extract itemscount from CartContext
    const { cartItems } = useContext(CartContext);
    

    return ( 
        <div>
            <nav className="NavbarItems">
                <div className="Part"> 
                    <ul className="navmenu">
                        <div className="menuicon" onClick={toggleLinks}> 
                            <AiOutlineAlignLeft/>
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
                <Link to="/"><img className="navbarlogo" src={logo} alt="logo" /></Link>
                    <div className="Search">
                    <p>English <span>/italy</span></p>
                    <div className="icons">
                        < AiOutlineSearch/>
                    </div>
                    
                    <Link className="icons" to="/Cart" >
                        <AiOutlineShoppingCart/>
                    {/* If the number of cartItems is greater than 0, display the
                    number of items in the cart */}
                    {cartItems.length > 0 && (
                      <div className="Circlecart">{cartItems.length}</div>
                    )}
                    </Link>
                </div>        
            </nav>
            <div className={active? "broad active" :"broad"}>
                            <div>
                                <div className="p1" onClick={toggleLinks1}>
                                <h1>Home</h1>
                                <div className="drop">{active1 ? <AiOutlineDown/> : <AiOutlineUp/>}</div>
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
                                <div className="drop">{active2 ? <AiOutlineDown/> : <AiOutlineUp/>}</div>
                                </div>
                                <div className={active2 ? "show" : "show active" }>
                                    <div className="p1" onClick={toggleLinks5}>
                                    <p>Shop Layout</p>
                                    <div className="drop">{active5 ? <AiOutlineDown/> : <AiOutlineUp/>}</div>
                                    </div>
                                    <div className={active5 ? "show" : "show active" }>
                                        <p>Shop Instagram</p>
                                        <p>Collection Classic</p>
                                        <p>Collection Modern</p>
                                    </div>
                                    <div className="p1" onClick={toggleLinks6}>
                                    <p>Product Layout</p>
                                    <div className="drop">{active6 ? <AiOutlineDown/> : <AiOutlineUp/>}</div>
                                    </div>
                                    <div className={active6 ? "show" : "show active" }>
                                        <p>Product Grouped</p>
                                        <p>Product Affilate</p>
                                        <p>Product Configurable</p>
                                    </div>
                                    <div className="p1" onClick={toggleLinks7}>
                                    <p>Shop Page</p>
                                    <div className="drop">{active7 ? <AiOutlineDown/> : <AiOutlineUp/>}</div>
                                    </div>
                                    <div className={active7 ? "show" : "show active" }>
                                        <p>Shopping Cart</p>
                                        <p>Check Out</p>
                                        <p>My Account</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="p1" onClick={toggleLinks3}>
                                    <h1>Pages</h1>
                                    <div className="drop">{active3 ? <AiOutlineDown/> : <AiOutlineUp/>}</div>
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
                                <div className="p1" onClick={toggleLinks4}>
                                    <h1>Blog</h1>
                                    <div className="drop">{active4 ? <AiOutlineDown/> : <AiOutlineUp/>}</div>
                                    </div>
                                    <div className={active4 ? "show" : "show active" }>
                                        <p>Blog Sidebar</p>
                                        <p>Blog No Sidebar</p>
                                        <p>Blog 03 Columns</p>
                                        <p>Blog Mansory</p>
                                        <p>Single Post</p>
                                </div>
                            </div>
                            <div onClick={toggleLinks} className="close">
                                <AiOutlineClose/>
                            </div>

                        </div>

            <MobileNav/>
            
        </div>
     );
}
 
export default Navbar;