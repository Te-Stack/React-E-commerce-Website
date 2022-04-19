import { useState } from "react";
import { Link } from "react-router-dom";
import {ImFacebook} from "react-icons/im";
import {BsInstagram,BsGithub} from "react-icons/bs";
import {AiOutlineShoppingCart,AiOutlineAlignLeft,AiOutlineClose,AiOutlineDribbble,AiOutlineSearch,AiOutlineDown,AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
import  "./navbar.scss";
 

const MobileNav = () => {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
    const [active7, setActive7] = useState(false);


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
    

    return ( 
        <div>

            <nav className="MobileNavbarItem">
                <Link to="/"><h1 className="navbarlogo text-3xl"  > PAYNA</h1></Link>
                <Link className="icons"  to="/Cart" ><AiOutlineShoppingCart/></Link>
                <div className="menuicon" onClick={toggleLinks}> 
                {active ? <AiOutlineClose/> : <AiOutlineAlignLeft />}
                </div>
                <ul className={active ? "navmenu active": "navmenu"}>
                    <div className="port1">
                        <input type="text" placeholder="Search entire store...." /><div className="searchcon">
                        < AiOutlineSearch/></div>
                    </div>
                    <div className="port2">
                        <div>
                            <div className="p1" >
                                <h1>Home</h1>
                                <div className="drop" onClick={toggleLinks1}>{active1 ? <AiOutlinePlus/> : <AiOutlineMinus/>}</div>
                                </div>
                                <div className={active1 ? "show" : "show active" }>
                                    <p>Demo Group 01</p>
                                    <p>Demo Group 02</p>
                                    <p>Demo Group 03</p>
                                </div>
                        </div>
                        <div>
                            <div className="p1" >
                                <h1>Shop</h1>
                                <div className="drop" onClick={toggleLinks2}>{active2 ? <AiOutlinePlus/> : <AiOutlineMinus/>}</div>
                                </div>
                                <div className={active2 ? "show" : "show active" }>
                                    <p>Shop Layout</p>
                                    <p>Product Layout</p>
                                    <p>Shop Page</p>
                                </div>
                        </div>
                        <div>
                        <div className="p1" >
                                <h1>Pages</h1>
                                <div className="drop" onClick={toggleLinks3}>{active3 ? <AiOutlinePlus/> : <AiOutlineMinus/>}</div>
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
                            <div className="p1" >
                                <h1>Blog</h1>
                                <div className="drop" onClick={toggleLinks4}>{active4 ? <AiOutlinePlus/> : <AiOutlineMinus/>}</div>
                                </div>
                                <div className={active4 ? "show" : "show active" }>
                                    <p>Blog Sidebar</p>
                                    <p>Blog No Sidebar </p>
                                    <p>Blog 03 Columns</p>
                                    <p>Blog Mansory</p>
                                    <p>Single Post</p>
                                </div>
                        </div>
                        <div>
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                    <div className="port3">
                        <div>
                        <div className="p1" >
                                <h1>Language</h1>
                                <div className="drop" onClick={toggleLinks5}><AiOutlineDown/></div>
                                </div>
                                <div className={active5 ? "show" : "show active" }>
                                    <p>English(US)</p>
                                    <p>English(UK)</p>
                                    <p>Spanish</p>
                                </div>
                        </div>
                        <div>
                            <h1>Currency</h1>
                            <p>USD</p>
                            <p>EUR</p>
                            <p>Real</p>
                            <p>BDT</p>
                        </div>
                        <div>
                            <h1>My Account</h1>
                            <p>Login</p>
                            <p>Create Account</p>
                            <p>My Account</p>
                        </div>
                    </div>
                    <div className="port4">
                        <p>info@la_studioweb.com</p>
                        <p>137-624-3765</p>
                        <p>50 Rocuns Road, Apt 600</p>
                    </div>
                    <div className="port5">
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

                    </div>
                    
                    
                </ul>
            </nav>
            
        </div>
     );
}
 
export default MobileNav;