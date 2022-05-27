
import "./reviews.scss";
import Detail1 from "./page/Detail1";
import Detail2 from "./page/Detail2";
import Detail3 from "./page/Detail3";
import Detail4 from "./page/Detail4";
import { Link } from "react-router-dom";


const Reviews = () => {
    return(   
        <div className="description-review-area pb-100">
            <div className="custom-container-6">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="description-review-wrapper">
                            <div className="description-review-topbar nav">
                                <Link to="/ProductDetail/1">
                                <a className="active" data-bs-toggle="tab" href="#des-details1">Description</a></Link>
                                <Link to="/ProductDetail/2">
                                <a data-bs-toggle="tab" href="#des-details2">Reviews (1)</a></Link>
                                <Link to="/ProductDetail/3" >
                                <a data-bs-toggle="tab" href="#des-details3">About Brand</a></Link>
                                <Link to="/ProductDetail/4">
                                <a data-bs-toggle="tab" href="#des-details4">Shipping & Delivery</a></Link>
                            </div>
                            <div className="tab-content description-review-bottom">
                                <Detail1/>
                                <Detail2/>
                                <Detail3/>
                                <Detail4/>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews