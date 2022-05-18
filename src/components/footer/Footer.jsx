// import Button from "../button/Button";
import "./footer.scss"
import logo from "../../assets/images/logo/logo-white.png";
import {BsFacebook, BsTwitter,BsYoutube,BsDribbble } from "react-icons/bs"

const Footer = () => {
    return ( 
        <>
        <div className="footer text-center">
            <div className="firstRow">
                <div>
                    <img alt="logo" src={logo} />
                    
                    
                </div>
                <div>
                <ul>
                        <li>info@example.com</li>
                        <li>+2349027499683</li>
                        <li>035 Virginia Plaza Suite 331</li>
                    </ul>
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
                    <h3>COMPANY</h3>
                    <ul>
                        <li>Help</li>
                        <li>Returns</li>
                        <li>Gift Vouchers</li>
                        <li>Affiliate</li>
                        <li>Work for us</li>
                    </ul>
                </div>
                <div>
                    <h3>USEFUL</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Press</li>
                        <li>Terms and Condition</li>
                    </ul>
                </div>
                <div>
                    <h3>QUICKLINKS</h3>
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
                    <h3>JOIN OUR NEWSLETTER</h3>
                    <input type="text" name="text" placeholder="Enter your email address..." />
                    {/* <Button text={"Go"} /> */}
                    <button>Subsribe</button>

                </div>

            </div>

        </div>
        
        </>
     );
}
 
export default Footer;