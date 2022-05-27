import ".././reviews.scss";
import img3 from "../../../assets/images/product-details/client-1.jpg";
import { AiTwotoneStar} from "react-icons/ai";


const Detail2 = () => {
    return ( 
        <div>
            <div id="des-details2" className="tab-pane ">
                                    <div className="review-wrapper">
                                        <h2>1 review for High Collar Jacket</h2>
                                        <div className="single-review">
                                            <div className="review-img">
                                                <img src={img3} alt=""/>
                                            </div>
                                            <div className="review-content">
                                                <div className="review-top-wrap">
                                                    <div className="review-name">
                                                        <h5><span>John Snow</span> - March 14, 2019</h5>
                                                    </div>
                                                    <div className="review-rating">
                                                        <div className="yellow"><AiTwotoneStar/></div>
                                                        <div className="yellow"><AiTwotoneStar/></div>
                                                        <div className="yellow"><AiTwotoneStar/></div>
                                                        <div className="yellow"><AiTwotoneStar/></div>
                                                        <div className=""><AiTwotoneStar/></div>
                                                    </div>
                                                </div>
                                                <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ratting-form-wrapper">
                                        <span>Add a Review</span>
                                        <p>Your email address will not be published. Required fields are marked <span>*</span></p>
                                        <div className="ratting-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="rating-form-style mb-20">
                                                            <label>Name <span>*</span></label>
                                                            <input type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="rating-form-style mb-20">
                                                            <label>Email <span>*</span></label>
                                                            <input type="email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="star-box-wrap">
                                                            <div className="single-ratting-star">
                                                                <a href="#"><AiTwotoneStar/></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                                <a href="#"><AiTwotoneStar/></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="rating-form-style mb-20">
                                                            <label>Your review <span>*</span></label>
                                                            <textarea name="Your Review"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-submit">
                                                            <input type="submit" value="Submit"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
        </div>
     );
}
 
export default Detail2;