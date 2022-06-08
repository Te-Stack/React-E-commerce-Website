import "./cartcomp.scss"
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import {formatCurrency} from "../../utils";

import {AiOutlineClose,AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const CartComp = ({product}) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);


    return ( 
        <div>
                <tr>
                    <td className="product-remove">
                        <a href="#" onClick={() => removeFromCart(product)}><AiOutlineClose/></a>
                    </td>
                    <td className="product-img">
                        <a href="#"><img className="image-fluid" src={product.image2} alt="cart"/></a>
                    </td>
                    <td className="product-name">
                        <a href="#">{product.name}</a>
                    </td>
                    <td className="product-price">
                        <span className="amount">{formatCurrency(product.price)}</span>
                    </td>
                    <td className="cart-quality">
                        <div className="quickview-quality quality-height-dec2">
                            <div className="cart-plus-minus">
                            <button onClick={() => decrease(product)}  className="qtybutton dec"><AiOutlineMinus/></button>
                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value={product.quantity}/>
                            <button onClick={() => increase(product)} className="qtybutton inc"><AiOutlinePlus/></button>
                            </div>
                        </div>
                    </td>
                     <td className="product-total"><span>{formatCurrency(product.price * product.quantity)}</span></td>
                </tr> 
        </div>
     );
}
 
export default CartComp;