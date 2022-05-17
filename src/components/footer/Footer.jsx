// import Button from "../button/Button";
import "./footer.scss"
import logo from "../../assets/images/logo/logo.png"
import {BsFacebook, BsTwitter,BsYoutube,BsDribbble } from "react-icons/bs"

const Footer = () => {
    return ( 
        <>
        <div className="footer">
            <div className="firstRow">
                <div>
                    <img src={logo} />
                    
                </div>
                <div>
                    <div>
                        <div className="icons">
                            <BsFacebook/>
                        </div>
                    </div>
                    <div>
                        <div className="icons">
                            <BsTwitter/>
                        </div>
                    </div>
                    <div>
                        
                        <div className="icons">
                            <BsYoutube/>
                        </div>
                    </div> 
                    <div>
                        <div className="icons">
                            <BsDribbble/>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="secondRow">
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Pricings</li>
                        <li>Products</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Careers</li>
                        <li>Community</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="thirdRow">
                <div>
                    <input type="text" name="text" placeholder="Updates in your inbox..." />
                    {/* <Button text={"Go"} /> */}
                    <button>Subsribe</button>

                </div>
                

                <p>Copyright 2020. All Rights Reserved</p>

            </div>
            

        </div>
        
        </>
     );
}
 
export default Footer;