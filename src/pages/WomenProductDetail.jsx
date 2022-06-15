
import Details from "../components/Details/Detail";
import PCarousels from "../components/ProductSlider/PSlider";
import Reviews from "../components/Reviews/Review";
import { women } from "../data/WomenData";

const ProductDetail2 = () => {
    return ( 
        <div>
            {/* <Product/> */}
            {women.map((product) => (
          <Details key={product.id} product={product} />
          ))}
            
            {/* <Details /> */}
            <Reviews/>  
            
            <PCarousels/>
            
        </div>
        
     );
}
 
export default ProductDetail2;