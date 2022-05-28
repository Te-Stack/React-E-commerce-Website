import "./reviews.scss";
import img1 from "../../assets/images/product-details/pro-details-banner.jpg";
import img2 from "../../assets/images/icon-img/pro-dec-icon.jpg";
import img3 from "../../assets/images/product-details/client-1.jpg";
import { AiTwotoneStar} from "react-icons/ai";


const Reviews = () => {
    return(   
        <div className="description-review-area pb-100">
            <div className="custom-container-6">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="description-review-wrapper">
                            <div className="description-review-topbar nav">
                                <a className="active" data-bs-toggle="tab" href="#des-details1">Description</a>
                                <a data-bs-toggle="tab" href="#des-details2">Reviews (1)</a>
                                <a data-bs-toggle="tab" href="#des-details3">About Brand</a>
                                <a data-bs-toggle="tab" href="#des-details4">Shipping & Delivery</a>
                            </div>
                            <div className="tab-content description-review-bottom">
                            <div id="des-details1" className="tab-pane active">
                                    <div className="product-description-wrapper">
                                        <div className="row">
                                            <div className="col-38">
                                                <div className="pro-details-banner banner-zoom default-overlay">
                                                    <a href="#"><img src={img1} alt=""/></a>
                                                </div>
                                            </div>
                                            <div className="col-62">
                                                <div className="product-dec-content">
                                                    <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</p>
                                                    <ul>
                                                        <li>Maecenas eu ante a elit tempus fermentum. Aliquam <br/>commodo tincidunt semper</li>
                                                        <li>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
                                                    </ul>
                                                    <img src={img2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                        <div className="i"><AiTwotoneStar/></div>
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
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                            </div>
                                                            <div className="single-ratting-star">
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
                                                                <a className="i" href="#"><AiTwotoneStar/></a>
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
                                <div id="des-details3" className="tab-pane">
                                    <div className="about-shiping-content">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</p>
                                        <ul>
                                            <li>Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</li>
                                            <li>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
                                        </ul>
                                        <p>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accumsan, justo ac mollis pharetra,.</p>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                    </div>
                                </div>
                                <div id="des-details4" className="tab-pane">
                                    <div className="about-shiping-content">
                                        <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</p>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <ul>
                                            <li>Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</li>
                                            <li>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
                                        </ul>
                                        <p>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accumsan, justo ac mollis pharetra,.</p>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews