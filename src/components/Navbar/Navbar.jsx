import { useState } from "react";

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
            <Link href="/"><img className="styles.navbarlogo" src={Logo} /></Link>
            <div className="styles.menuicon" onClick={toggleLinks}> 
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
            
        </>
     );
}
 
export default Navbar;