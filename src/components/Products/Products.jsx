import "./product.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/product/hm-1-pro-1.jpg";
import img2 from "../../assets/images/product/hm-1-pro-1-2.jpg";
import img3 from "../../assets/images/product/hm-1-pro-2.jpg";
import img4 from "../../assets/images/product/hm-1-pro-2-2.jpg";
import img5 from "../../assets/images/product/hm-1-pro-3.jpg";
import img6 from "../../assets/images/product/hm-1-pro-3-2.jpg";
import img7 from "../../assets/images/product/hm-1-pro-4.jpg";
import img8 from "../../assets/images/product/hm-1-pro-4-2.jpg";
import img9 from "../../assets/images/product/hm-1-pro-5.jpg";
import img10 from "../../assets/images/product/hm-1-pro-5-2.jpg";
import img11 from "../../assets/images/product/hm-1-pro-6.jpg";
import img12 from "../../assets/images/product/hm-1-pro-6-2.jpg";
import img13 from "../../assets/images/product/hm-1-pro-7.jpg";
import img14 from "../../assets/images/product/hm-1-pro-7-2.jpg";
import img15 from "../../assets/images/product/hm-1-pro-8.jpg";
import img16 from "../../assets/images/product/hm-1-pro-8-2.jpg";
import {AiOutlineHeart, AiOutlineZoomIn, AiFillSignal, AiTwotoneStar} from "react-icons/ai";

const Product = () => {
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
                                <div className="product-wrap mb-55">
                                    <div className="product-img default-overlay mb-20">
                                        <Link className="a" to="/ProductDetail">
                                            <img className="default-img" src={img1} alt=""/>
                                            <img className="hover-img" src={img2} alt=""/>
                                        </Link>
                                        <div className="product-action"> 
                                            <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a title="Buy on Themeforest" href="#">Buy Here</a>
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

                <div className="div">
                            <div className="product-wrap mb-55">
                                    <div className="product-img default-overlay mb-20">
                                        <Link className="a" to="/ProductDetail">
                                            <img className="default-img" src={img3} alt=""/>
                                            <img className="hover-img" src={img4} alt=""/>
                                            <span className="price-dec">-3.1%</span>

                                        </Link>
                                        <div className="product-action"> 
                                            <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a href="#">Select Option</a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
                                        <div className="product-price">
                                        <span className="old">$85.00</span>
                                            <span>$75.00</span>
                                        </div>
                                        <div className="product-rating">
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="i" ><AiTwotoneStar/></div>
                                        </div>
                                    </div>
                                </div>
                </div>

                <div className="div">
                            <div className="product-wrap mb-55">
                                    <div className="product-img default-overlay mb-20">
                                        <Link className="a" to="/ProductDetail">
                                            <img className="default-img" src={img5} alt=""/>
                                            <img className="hover-img" src={img6} alt=""/>
                                        </Link>
                                        <div className="product-action"> 
                                            <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a href="#">Add to Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
                                        <div className="product-price">

                                            <span>$65.00</span>
                                        </div>
                                        <div className="product-rating">
                                            <div className=" yellow" ><AiTwotoneStar/></div>
                                            <div className=" yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className=" yellow" ><AiTwotoneStar/></div>
                                            <div className="i" ><AiTwotoneStar/></div>
                                        </div>
                                    </div>
                                </div>
                </div>

                <div className="div" >
                <div className="product-wrap mb-55">
                                    <div className="product-img default-overlay mb-20">
                                        <Link className="a" to="/ProductDetail">
                                            <img className="default-img" src={img7} alt=""/>
                                            <img className="hover-img" src={img8} alt=""/>
                                        </Link>
                                        <div className="product-action"> 
                                            <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a href="#">Add to Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
                                        <div className="product-price">

                                            <span>$41.00</span>
                                        </div>
                                        <div className="product-rating">
                                            <div className="i yellow" ><AiTwotoneStar/></div>
                                            <div className="i yellow" ><AiTwotoneStar/></div>
                                            <div className="i yellow" ><AiTwotoneStar/></div>
                                            <div className="i yellow" ><AiTwotoneStar/></div>
                                            <div className="i" ><AiTwotoneStar/></div>
                                        </div>
                                    </div>
                                </div>
                </div>
    
                <div className="div">
                        <div className="product-wrap mb-55">
                                    <div className="product-img default-overlay mb-20">
                                        <Link className="a" to="/ProductDetail">
                                            <img className="default-img" src={img9} alt=""/>
                                            <img className="hover-img" src={img10} alt=""/>
                                            <span className="out-of-stock">Out of stock</span>

                                        </Link>
                                        <div className="product-action"> 
                                            <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a href="#">Add to Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
                                        <div className="product-price">

                                            <span>$65.00</span>
                                        </div>
                                        <div className="product-rating">
                                            <div className="i yellow" ><AiTwotoneStar/></div>
                                            <div className="i yellow" ><AiTwotoneStar/></div>
                                            <div className="i yellow" ><AiTwotoneStar/></div>
                                            <div className="i yellow" ><AiTwotoneStar/></div>
                                            <div className="i" ><AiTwotoneStar/></div>
                                        </div>
                                    </div>
                                </div>
                </div>
                <div className="div">
                        <div className="product-wrap mb-55">
                                    <div className="product-img default-overlay mb-20">
                                        <Link className="a" to="/ProductDetail">
                                            <img className="default-img" src={img11} alt=""/>
                                            <img className="hover-img" src={img12} alt=""/>
                                            <span className="price-dec">-17.9%</span>

                                        </Link>
                                        <div className="product-action"> 
                                            <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a href="#">Add to Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
                                        <div className="product-price">
                                        <span className="old">$60.00</span>
                                            <span>$50.00</span>
                                        </div>
                                        <div className="product-rating">
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="i" ><AiTwotoneStar/></div>
                                        </div>
                                    </div>
                                </div>
                        
                </div>
                <div className="div">
                <div className="product-wrap mb-55">
                                    <div className="product-img default-overlay mb-20">
                                        <Link className="a" to="/ProductDetail">
                                            <img className="default-img" src={img13} alt=""/>
                                            <img className="hover-img" src={img14} alt=""/>

                                        </Link>
                                        <div className="product-action"> 
                                            <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlists</span></a>
                                            <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <Link to="/ProductDetail">View Products</Link>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
                                        <div className="product-price">
                                            <span>$18.00</span>
                                        </div>
                                        <div className="product-rating">
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="i" ><AiTwotoneStar/></div>
                                        </div>
                                    </div>
                                </div>
                </div>
                <div className="div">
                <div className="product-wrap mb-55">
                                    <div className="product-img default-overlay mb-20">
                                        <Link className="a" to="/ProductDetail">
                                            <img className="default-img" src={img15} alt=""/>
                                            <img className="hover-img" src={img16} alt=""/>
                                            <span className="price-dec">-3.1%</span>

                                        </Link>
                                        <div className="product-action"> 
                                            <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                            <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                            <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                        </div>
                                        <div className="product-action-2">
                                            <a href="#">Add to Cart</a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
                                        <div className="product-price">
                                        <span className="old">$90.00</span>
                                            <span>$80.00</span>
                                        </div>
                                        <div className="product-rating">
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="yellow" ><AiTwotoneStar/></div>
                                            <div className="i" ><AiTwotoneStar/></div>
                                        </div>
                                    </div>
                                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Product;