import PSample from "../PSample/psample";
import {shops} from "../../ShopData3";
import "./shopcomp.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";



const ShopComp3 = () => {
    return ( 
        <div>
            <div className="products">
                {/* <Product/> */}
            {shops.map((product) => (
          <PSample key={product.id} product={product} />
          ))}
            
            </div>
                    <div className="pro-pagination-style text-center">
                        <ul>
                            <li><Link className=" a" to="/Shop">1</Link></li>
                            <li><Link className="a"  to="/Shop/2">2</Link></li>
                            <li><Link className= "a active" to="/Shop/3">3</Link></li>
                            <li><Link className="a" to="/Shop/4">4</Link></li>
                            <li><a href="#" ><span className="i"><AiOutlineArrowRight/></span></a></li>
                        </ul>
                    </div>

        </div>
     );
}
 
export default ShopComp3;