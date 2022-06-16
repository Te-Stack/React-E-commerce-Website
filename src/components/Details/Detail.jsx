import "./details.scss";
import { Link } from "react-router-dom";
import  CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../../utils";
import {AiOutlineHeart, AiTwotoneStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCheckCircle, AiOutlineFullscreen,AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import {BsFacebook, BsTwitter,BsYoutube,BsDribbble, BsFillBarChartFill } from "react-icons/bs"



const Details = ({product}) => {
    const { addToCart, increase, cartItems, sumItems, itemCount,decrease } =
    useContext(CartContext);

    //Check whether the product is in the cart or not
  const isInCart = (product) => { 
    return !!cartItems.find((item) => item.id === product.id);
  };


    return ( 
        <div>
            <div className="breadcrumb-area m-4 pt-50 pb-50">
            <div className="custom-container-6">
                <div className="breadcrumb-content">
                    <ul>
                        <li><a href="#">Home </a></li>
                        <li><span> &gt; </span></li>
                        <li><a href="/Shop">Shop Page </a></li>
                        <li><span> &gt;  </span></li>
                        <li><a href="#">Fashions </a></li>
                        <li><span> &gt; </span></li>
                        <li class="active">{product.name}</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="product-details-area pb-90">
            <div className="custom-container-6">
                <div className="row">
                    <div className="col-pro-60">
                        <div className="padding-5-row-col">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="easyzoom-style mb-10">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a href={product.image1}>
                                                <img src={product.image1} alt=""/>
                                            </a>
                                        </div>
                                        <span className="product-sale">Sale!</span>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="easyzoom-style mb-10">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a href={product.image2}>
                                                <img src={product.image2} alt=""/>
                                            </a>
                                        </div>
                                        <a className="easyzoom-pop-up img-popup" href={product.image2}><span><AiOutlineFullscreen/></span></a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="easyzoom-style mb-10">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a href={product.image3}>
                                                <img src={product.image3} alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="easyzoom-style">
                                        <div className="easyzoom easyzoom--overlay">
                                            <a href={product.image4}>
                                                <img src={product.image4} alt=""/>
                                            </a>
                                        </div>
                                        <a className="easyzoom-pop-up img-popup" href={product.image4}><span><AiOutlineFullscreen/></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-pro-40 sidebar-active">
                        <div className="pl-35 product-details-content quickview-content">
                            <div className="pro-details-next-prv">
                                <a href="#"><AiOutlineArrowLeft/></a>
                                <a href="#"><AiOutlineArrowRight/></a>
                            </div>
                            <h2>{product.name}</h2>
                            <div className="quickview-ratting-review">
                                <div className="quickview-ratting-wrap">
                                    <div className="quickview-ratting">
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="yellow" ><AiTwotoneStar/></div>
                                        <div className="i"><AiTwotoneStar/></div>
                                    </div>
                                    <a href="#"> (1 customer review)</a>
                                </div>
                                <div className="quickview-stock">
                                <div className="i"><AiOutlineCheckCircle/></div><span> in stock</span>
                                </div>
                            </div>
                            <h3><span>$50.00</span>{formatCurrency(product.price)}</h3>
                            <div className="quickview-peragraph">
                                <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra</p>
                                <ul>
                                    <li>Composition: 50% cotton,45% polyester, 5% polyamide.</li>
                                    <li>Filling: 100% polyester.</li>
                                    <li>Hood fur: 64% acrylic,23% modacrylic,13% polyester</li>
                                </ul>
                            </div>
                            <div className="quickview-action-wrap">
                            <div className="quickview-quality quality-height-dec2">
                                <div className="cart-plus-minus">
                                <button onClick={() => decrease(product)}  className="qtybutton dec"><AiOutlineMinus/></button>
                                <input class="cart-plus-minus-box" type="text" value={product.quantity}/>
                                <button onClick={() => increase(product)} className="qtybutton inc"><AiOutlinePlus/></button>
                                </div>
                            </div>
                                <div className="quickview-cart">
                                        {isInCart(product) && (
                                        <a
                                            onClick={() => {
                                            increase(product);
                                            }}
                                            className="btn"
                                        >
                                            Add More
                                        </a>
                                        )}
                                        {!isInCart(product) && (
                                        <a onClick={() => addToCart(product)} className="btn">Add to Cart</a>
                                        )}
                                </div>
                                <div className="quickview-wishlist">
                                    <a title="Add to wishlist" href="#" className="i"><AiOutlineHeart/></a>
                                </div>
                                <div className="quickview-compare">
                                    <a title="Add to compare" href="#" className="i"><BsFillBarChartFill/></a>
                                </div>
                            </div>
                            <div className="quickview-meta">
                                <span>SKU: <span>REF. LA-103</span></span>
                                <span>Categories: <a href="#">Fashions</a>, <a href="#">Main 03</a></span>
                                <span>Tags: <a href="#">Coat</a>, <a href="#">Dresses</a>, <a href="#">Fashion</a></span>
                            </div>
                            <div className="default-social">
                                <ul>
                                    <li><a className="facebook" href="#"><span className="i"><BsFacebook/></span></a></li>
                                    <li><a className="twitter" href="#"><span className="i"><BsTwitter/></span></a></li>
                                    <li><a className="youtube" href="#"><span className="i"><BsYoutube/></span></a></li>
                                    <li><a className="dribble" href="#"><span className="i"><BsDribbble/></span></a></li>
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