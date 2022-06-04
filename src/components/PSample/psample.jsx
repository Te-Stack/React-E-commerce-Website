import "../Products/product.scss";
import {AiOutlineHeart, AiOutlineZoomIn, AiFillSignal, AiTwotoneStar} from "react-icons/ai";
import { Link } from "react-router-dom";
import  CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import { formatCurrency } from "../../utils";


const PSample = ({product}) => {
    const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => { 
    return !!cartItems.find((item) => item.id === product.id);
  };

    return ( 
        


       
            <div className="div">
                            <div className="product-wrap">
                                <div className="product-img default-overlay mb-5">
                                    <Link className="a" to="/ProductDetail">
                                        <img className="default-img" src={product.image1} alt=""/>
                                        <img className="hover-img" src={product.image2} alt=""/>
                                    </Link>
                                    <div className="product-action"> 
                                        <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                                        <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                                        <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
                                    </div>
                                    <div className="product-action-2">
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
                                        <a onClick={() => addToCart(product)}>Add to Cart</a>
                                        )}
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h3><Link to="/ProductDetail">{product.name}</Link></h3>
                                    <div className="product-price">
                                        <span>{formatCurrency(product.price)}</span>
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
 );
}
 
export default PSample;