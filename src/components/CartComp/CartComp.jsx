import "./cartcomp.scss"
import img1 from "../../assets/images/cart/cart-3.jpg";
import img2 from "../../assets/images/cart/cart-4.jpg";
import {AiOutlineClose,AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const CartComp = () => {
    return ( 
        <div>
            <div className="breadcrumb-area bg-gray-2 section-padding-1 pt-200 pb-120">
            <div className="container-fluid">
                <div className="breadcrumb-content text-center">
                    <div className="breadcrumb-title">
                        <h2>Cart</h2>
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
        
            <div className="cart-main-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-8">
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
                                                <tr>
                                                    <td className="product-remove">
                                                        <a href="#"><AiOutlineClose/></a>
                                                    </td>
                                                    <td className="product-img">
                                                        <a href="#"><img src={img1} alt="cart"/></a>
                                                    </td>
                                                    <td className="product-name"><a href="#">High Collar Jacket</a></td>
                                                    <td className="product-price"><span className="amount">$26.00</span></td>
                                                    <td className="cart-quality">
                                                        <div className="quickview-quality quality-height-dec2">
                                                            <div className="cart-plus-minus">
                                                                <AiOutlineMinus/>
                                                                <input class="cart-plus-minus-box" type="text" name="qtybutton" value="2"/>
                                                                <AiOutlinePlus/>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-total"><span>$110.00</span></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-remove">
                                                        <a href="#"><AiOutlineClose/></a>
                                                    </td>
                                                    <td className="product-img">
                                                        <a href="#"><img src={img2} alt=""/></a>
                                                    </td>
                                                    <td className="product-name"><a href="#">High Collar Jacket</a></td>
                                                    <td className="product-price"><span className="amount">$26.00</span></td>
                                                    <td className="cart-quality">
                                                        <div className="quickview-quality quality-height-dec2">
                                                            <div className="cart-plus-minus">
                                                                <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2"/>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="product-total"><span>$110.00</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="cart-shiping-update-wrapper">
                                        <div className="discount-code">
                                            <input type="text" required="" name="name" placeholder="Coupon code"/>
                                            <button className="coupon-btn" type="submit">Apply coupon</button>
                                        </div>
                                        <div className="cart-clear">
                                            <a href="#">Clear Cart</a>
                                            <a href="#">Update cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="grand-total-wrap">
                                        <h4>Cart totals</h4>
                                        <div className="grand-total-content">
                                            <ul>
                                                <li>Subtotal <span> $87.00</span></li>
                                                <li>Total <span>$87.00</span> </li>
                                            </ul>
                                        </div>
                                        <div className="grand-btn">
                                            <a href="#">Proceed to checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default CartComp;