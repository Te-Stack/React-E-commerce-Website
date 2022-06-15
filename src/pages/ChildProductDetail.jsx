// import Details from "../components/Details/Details";
import Details from "../components/Details/MenDetails";
import PCarousels from "../components/ProductSlider/PSlider";
import Reviews from "../components/Reviews/Review";
import { child } from "../data/ChildData";

const ProductDetail3 = () => {
    return ( 
        <div>
            {/* <Product/> */}
            {child.map((product) => (
          <Details key={product.id} product={product} />
          ))}
            
            {/* <Details /> */}
            <Reviews/>  
            
            <PCarousels/>
            
        </div>
        
     );
}
 
export default ProductDetail3;