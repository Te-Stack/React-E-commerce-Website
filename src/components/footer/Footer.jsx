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
                    <img alt="logo" src={logo} />
                    
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
                        <li>Help</li>
                        <li>Returns</li>
                        <li>Gift Vouchers</li>
                        <li>Affiliate</li>
                        <li>Work for us</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Press</li>
                        <li>Terms and Condition</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>The collections </li>
                        <li>Size guide</li>
                        <li>Compare</li>
                        <li>My Account</li>
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