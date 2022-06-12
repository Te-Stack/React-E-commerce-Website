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
                    <div className="product-tab-list tab-width nav ">
                        <a className="active" data-bs-toggle="tab" href="#product-1"  >
                            Man 
                        </a>
                        <a data-bs-toggle="tab" href="#product-1"  >
                            Woman
                        </a>
                        <a data-bs-toggle="tab" href="#product-1"  >
                            Kids
                        </a>
                        <a data-bs-toggle="tab" href="#product-1"  >
                            Accessories
                        </a>
                        <a data-bs-toggle="tab" href="#product-1" >
                            Essential prices
                        </a>
                    </div>
                    <div className="more">
                        <Link className="a" to="/Shop">View more</Link>
                    </div>
            </div>


            <div className="products tab-pane active" id="product-1">
                {/* <Product/> */}
            {products.map((product) => (
          <PSample key={product.id} product={product} />
          ))}
            
            </div>
            
        </div>
     );
}
 
export default Product;