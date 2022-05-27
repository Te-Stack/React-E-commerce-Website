import ".././reviews.scss";
import img1 from "../../../assets/images/product-details/pro-details-banner.jpg";
// import img1 from "../../assets/images/product-details/pro-details-banner.jpg";
import img2 from "../../../assets/images/icon-img/pro-dec-icon.jpg";
const Detail1 = () => {
    return ( 
        <div>
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
        </div>
     );
}
 
export default Detail1;