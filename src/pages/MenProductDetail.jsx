import Details from "../components/Details/Detail";
import PCarousels from "../components/ProductSlider/PSlider";
import Reviews from "../components/Reviews/Review";
import { men } from "../data/MenData";

const ProductDetail = () => {
    return ( 
        <div>
            {/* <Product/> */}
            {men.map((product) => (
          <Details key={product.id} product={product} />
          ))}
            
            {/* <Details /> */}
            <Reviews/>  
            
            <PCarousels/>
            
        </div>
        
     );
}
 
export default ProductDetail;