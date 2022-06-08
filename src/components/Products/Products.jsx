import "./product.scss";
import {products} from "../../data";
import PSample from "../PSample/psample"

import { Link } from "react-router-dom";


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
                        <Link className="a" to="/">View more</Link>
                    </div>
            </div>



            <div className="products">
                {/* <Product/> */}
            {products.map((product) => (
          <PSample key={product.id} product={product} />
        ))}
            </div>
        </div>
     );
}
 
export default Product;