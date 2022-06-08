import { useContext } from "react";
import CartComp from "../components/CartComp/CartComp";
import "../components/CartComp/cartcomp.scss";
import CartContext from "../context/cart/CartContext";
import { Link } from "react-router-dom";
import {formatCurrency} from "../utils";



const Cart = () => {
    // Extract the cart state from the context
  const { cartItems, checkout, clearCart, handleCheckout, itemCount, total } = useContext(CartContext);
    return ( 
        <div>
            {/* <CartComp/> */}
            <div className="breadcrumb-area bg-gray-2 section-padding-1 pt-200 pb-120">
            <div className="container-fluid">
                <div className="breadcrumb-content text-center">
                    <div className="breadcrumb-title">
                        <h2>Cart({cartItems.length})</h2>
                    </div>
                    <ul>
                        <li>
                            <a href="index.html">Home </a>
                        </li>
                        <li><span> &gt; </span></li>
                        <li className="active">Cart</li>
                    </ul>
                </div>
            </div>
            </div>
            {checkout && (
            <div>
            <h4>Thank you for your purchase!</h4>
            <p>
            Your order has been placed and will be delivered to you within 24
            hours.
            </p>
            <Link to="/">
            <button className="btn btn-success" onClick={clearCart}>Continue Shopping</button>
            </Link>
            </div>
            )}
            <div className="cart-main-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-8">
                                    {cartItems.length === 0 ? (<h4 className="empty">Cart is Empty</h4>):(
                                        <div className="table-content table-responsive cart-table-content">
                                        <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                                <th>Product</th>
                                                <th> Price</th>
                                                <th>Quantity</th>
                                                <th>total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cartItems.map((product) => (
                                            <CartComp key={product.id} product={product} />
                                            ))}
                                        
                                        </tbody>
                                        </table>
                                        </div>  
                                    )}
                                    {cartItems.length === 0 ? (<h1></h1>):(
                                        <div className="cart-shiping-update-wrapper">
                                        <div className="discount-code">
                                            <input type="text" required="" name="name" placeholder="Coupon code"/>
                                            <button className="coupon-btn" type="submit">Apply coupon</button>
                                        </div>
                                        <div className="cart-clear">
                                            <a href="#" onClick={clearCart}>Clear Cart</a>
                                        </div>
                                    </div>
                                    )}
                                    
                                    
                                </div>
                                {cartItems.length > 0 && 
                                <div className="col-lg-4">
                                <div className="grand-total-wrap">
                                    <h4>Cart totals</h4>
                                    <div className="grand-total-content">
                                        <ul>
                                            <li>Total Items <span>{itemCount}</span></li>
                                            <li>Subtotal <span>{formatCurrency(total)}</span></li>
                                            <li>Total <span>{formatCurrency(total)}</span></li>
                                        </ul>
                                    </div>
                                    <div className="grand-btn">
                                        <a href="#" onClick={handleCheckout}>Proceed to checkout</a>
                                    </div>
                                </div>
                            </div>
                            }   
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Cart;