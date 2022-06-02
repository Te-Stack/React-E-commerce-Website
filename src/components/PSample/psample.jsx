import "../Products/product.scss";
import {AiOutlineHeart, AiOutlineZoomIn, AiFillSignal, AiTwotoneStar} from "react-icons/ai";
import { Link } from "react-router-dom";
import products from "../../data";

const PSample = () => {
    return ( 
        <div className="ProductArea"> 
        <div className="title text-center">
                <h2 className="text-3xl font-bold">NEW PRODUCTS</h2>
                <p>Show popular your products</p>
        </div>
        <div className="tabs">
                <div className="product-tab-list tab-width ">
                    <a className="active" href="#product-1" >
                        Man
                    </a>
                    <a href="#product-2" >
                        Woman
                    </a>
                    <a href="#product-3" >
                        Kids
                    </a>
                    <a href="#product-4" >
                        Accessories
                    </a>
                    <a href="#product-5">
                        Essential prices
                    </a>
                </div>
                <div className="more">
                    <Link to="/">View more</Link>
                </div>
        </div>



        <div className="products">
            <div className="div">
                            <div className="product-wrap">
                                <div className="product-img default-overlay mb-5">
                                    <Link className="a" to="/ProductDetail">
                                        <img className="default-img" src={products.image1} alt=""/>
                                        <img className="hover-img" src={img2} alt=""/>
                                    </Link>
                                    <div className="product-action"> 
                                        <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                        <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                        <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                    </div>
                                    <div className="product-action-2">
                                        <a href="#">Buy Here</a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
                                    <div className="product-price">
                                        <span>$29.00</span>
                                    </div>
                                    <div className="product-rating">
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                    </div>
                                </div>
                            </div>
            </div>

            
        </div>
    </div>
 );
}
 
export default PSample;