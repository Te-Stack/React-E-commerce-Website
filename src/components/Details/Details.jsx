import "./details.scss";
import img1 from "../../assets/images/product-details/b-large-5.jpg";
import img2 from "../../assets/images/product-details/sticky-sidebar1.jpg";
import img3 from "../../assets/images/product-details/b-large-6.jpg";
import img4 from "../../assets/images/product-details/sticky-sidebar2.jpg";
import img5 from "../../assets/images/product-details/b-large-7.jpg";
import img6 from "../../assets/images/product-details/sticky-sidebar3.jpg";
import img7 from "../../assets/images/product-details/b-large-8.jpg";
import img8 from "../../assets/images/product-details/sticky-sidebar4.jpg";
import {AiOutlineHeart, AiTwotoneStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineFullscreen} from "react-icons/ai";
import {BsFacebook, BsTwitter,BsYoutube,BsDribbble, BsFillBarChartFill } from "react-icons/bs"



const Details = () => {
    return ( 
        <div>
            <div className="product-details-area pb-90">
            <div className="custom-container-6">
                <div className="row">
                    <div className="col-pro-60">
                        <div className="easyzoom-style mb-10">
                            <div className="easyzoom easyzoom--overlay">
                                <a href={img1}>
                                    <img src={img2} alt=""/>
                                </a>
                            </div>
                            <span className="product-sale">Sale!</span>
                        </div>
                        <div className="easyzoom-style mb-10">
                            <div className="easyzoom easyzoom--overlay">
                                <a href={img3}>
                                    <img src={img4} alt=""/>
                                </a>
                            </div>
                            <a className="easyzoom-pop-up img-popup" href={img3}><AiOutlineFullscreen/></a>
                        </div>
                        <div className="easyzoom-style mb-10">
                            <div className="easyzoom easyzoom--overlay">
                                <a href={img5}>
                                    <img src={img6} alt=""/>
                                </a>
                            </div>
                            <span className="product-sale">Sale!</span>
                        </div>
                        <div className="easyzoom-style">
                            <div className="easyzoom easyzoom--overlay">
                                <a href={img7}>
                                    <img src={img8} alt=""/>
                                </a>
                            </div>
                            <a className="easyzoom-pop-up img-popup" href={img7}><AiOutlineFullscreen/></a>
                        </div>
                    </div>
                    <div className="col-pro-40 sidebar-active sidebar-active-left">
                        <div className="pl-35 product-details-content quickview-content">
                            <div className="pro-details-next-prv">
                                <a href="#"><AiOutlineArrowLeft/></a>
                                <a href="#"><AiOutlineArrowRight/></a>
                            </div>
                            <h2>High Collar Jacket</h2>
                            <div className="quickview-ratting-review">
                                <div className="quickview-ratting-wrap">
                                    <div className="quickview-ratting">
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div><AiTwotoneStar/></div>
                                    </div>
                                    <a href="#"> (1 customer review)</a>
                                </div>
                                <div className="quickview-stock">
                                    <span><AiOutlineCheckCircle/> in stock</span>
                                </div>
                            </div>
                            <h3><span>$50.00</span>$29.00</h3>
                            <div className="quickview-peragraph">
                                <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra</p>
                                <ul>
                                    <li>Composition: 50% cotton,45% polyester, 5% polyamide.</li>
                                    <li>Filling: 100% polyester.</li>
                                    <li>Hood fur: 64% acrylic,23% modacrylic,13% polyester</li>
                                </ul>
                            </div>
                            <div className="quickview-action-wrap">
                                <div className="quickview-quality">
                                    <div className="cart-plus-minus">
                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2"/>
                                    </div>
                                </div>
                                <div className="quickview-cart">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                                <div className="quickview-wishlist">
                                    <a title="Add to wishlist" href="#"><AiOutlineHeart/></a>
                                </div>
                                <div className="quickview-compare">
                                    <a title="Add to compare" href="#"><BsFillBarChartFill/></a>
                                </div>
                            </div>
                            <div className="quickview-meta">
                                <span>SKU: <span>REF. LA-103</span></span>
                                <span>Categories: <a href="#">Fashions</a>, <a href="#">Main 03</a></span>
                                <span>Tags: <a href="#">Coat</a>, <a href="#">Dresses</a>, <a href="#">Fashion</a></span>
                            </div>
                            <div className="default-social">
                                <ul>
                                    <li><a className="facebook" href="#"><BsFacebook/></a></li>
                                    <li><a className="twitter" href="#"><BsTwitter/></a></li>
                                    <li><a className="youtube" href="#"><BsYoutube/></a></li>
                                    <li><a className="dribbble" href="#"><BsDribbble/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
     );
}
 
export default Details;