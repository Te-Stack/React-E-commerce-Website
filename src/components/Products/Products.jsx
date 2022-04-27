import "./product.scss";
import { Link } from "react-router-dom";
const Product = () => {
    return ( 
        <div className="ProductArea"> 
            <div className="title text-center">
                    <h2 className="text-3xl font-bold">NEW PRODUCTS</h2>
                    <p>Show popular your products</p>
            </div>
            <div className="tabs">
                    <div className="product-tab-list ">
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
                        <Link href="/">View more</Link>
                    </div>
            </div>



            <div className="products">
                <div className="div">Coulumn1</div>
                <div className="div">Coulumn2</div>
                <div className="div">Coulumn3</div>
                <div className="div" >Coulumn4</div>
                <div className="div">Coulumn5</div>
                <div className="div">Coulumn6</div>
                <div className="div">Coulumn7</div>
                <div className="div">Coulumn8</div>
            </div>
        </div>
     );
}
 
export default Product;