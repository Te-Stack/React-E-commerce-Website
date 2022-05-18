import { Component } from "react";
import "./pslider.scss";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/images/product/hm-1-pro-2.jpg";
import img2 from "../../assets/images/product/hm-1-pro-2-2.jpg";
import img3 from "../../assets/images/product/hm-1-pro-9.jpg";
import img4 from "../../assets/images/product/hm-1-pro-9-2.jpg";
import img5 from "../../assets/images/product/hm-1-pro-10.jpg";
import img6 from "../../assets/images/product/hm-1-pro-10-2.jpg";
import img7 from "../../assets/images/product/hm-1-pro-11.jpg";
import img8 from "../../assets/images/product/hm-1-pro-11-2.jpg";
import {AiOutlineHeart, AiOutlineZoomIn, AiFillSignal, AiTwotoneStar} from "react-icons/ai";




export default class PCarousels extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="carousel">
          <div className="title text-center">
                    <h2 className="text-3xl font-bold">SPECIAL OFFERS</h2>
                    <p>Show popular your products</p>
            </div>
          <Slider {...settings}>
            
          <div className="product-wrap">
          <div className="product-img default-overlay mb-5">
              <Link className="a" to="/ProductDetail">
                  <img className="default-img" src={img1} alt=""/>
                  <img className="hover-img" src={img2} alt=""/>
              </Link>
              <div className="product-action"> 
                  <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                  <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                  <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
              </div>
              <div className="product-action-2">
                  <a href="#">Shop Here</a>
              </div>
          </div>
          <div className="product-content">
              <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
              <div className="product-price">
              <span className="old">$35.00</span>
                  <span>$29.00</span>
              </div>
              <div className="product-rating">
                  <div className="yellow" ><AiTwotoneStar/></div>
                  <div className="yellow" ><AiTwotoneStar/></div>
                  <div className="yellow" ><AiTwotoneStar/></div>
                  <div className="yellow" ><AiTwotoneStar/></div>
                  <div className="yellow" ><AiTwotoneStar/></div>
              </div>
          </div>
          </div>
          <div className="product-wrap">
        <div className="product-img default-overlay mb-5">
          <Link className="a" to="/ProductDetail">
              <img className="default-img" src={img3} alt=""/>
              <img className="hover-img" src={img4} alt=""/>
          </Link>
          <div className="product-action"> 
              <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
              <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
              <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
          </div>
          <div className="product-action-2">
              <a href="#">Shop Here</a>
          </div>
        </div>
      <div className="product-content">
          <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
          <div className="product-price">
          <span className="old">$90.00</span>
              <span>$80.00</span>
          </div>
          <div className="product-rating">
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
          </div>
      </div>
          </div>
          <div className="product-wrap">
        <div className="product-img default-overlay mb-5">
          <Link className="a" to="/ProductDetail">
              <img className="default-img" src={img5} alt=""/>
              <img className="hover-img" src={img6} alt=""/>
          </Link>
          <div className="product-action"> 
              <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
              <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
              <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
          </div>
          <div className="product-action-2">
              <a  href="#">Shop Here</a>
          </div>
        </div>
      <div className="product-content">
          <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
          <div className="product-price">
          <span className="old">$90.00</span>
              <span>$79.00</span>
          </div>
          <div className="product-rating">
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
          </div>
      </div>
          </div>
          <div className="product-wrap">
        <div className="product-img default-overlay mb-5">
          <Link className="a" to="/ProductDetail">
              <img className="default-img" src={img7} alt=""/>
              <img className="hover-img" src={img8} alt=""/>
          </Link>
          <div className="product-action"> 
              <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
              <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
              <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
          </div>
          <div className="product-action-2">
              <a href="#">Shop Here</a>
          </div>
        </div>
      <div className="product-content">
          <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
          <div className="product-price">
              <span className="old">$85.00</span>
              <span>$49.00</span>
          </div>
          <div className="product-rating">
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
              <div className="yellow" ><AiTwotoneStar/></div>
          </div>
      </div>
          </div>
          <div className="product-wrap">
          <div className="product-img default-overlay mb-5">
              <Link className="a" to="/ProductDetail">
                  <img className="default-img" src={img3} alt=""/>
                  <img className="hover-img" src={img4} alt=""/>
              </Link>
              <div className="product-action"> 
                  <a title="Quick View" href="#"><div className="itag"><AiOutlineZoomIn/></div><span>Quick Shop</span></a>
                  <a title="Wishlist" href="#"><div className="itag"><AiOutlineHeart/></div><span>Add to Wishlist</span></a>
                  <a title="Compare" href="#"><div className="itag"><AiFillSignal/></div><span>Add to Compare</span></a>
              </div>
              <div className="product-action-2">
                  <a href="#">Shop Here</a>
              </div>
          </div>
          <div className="product-content">
              <h3><Link to="/ProductDetail">Slim-fit cotton shirt</Link></h3>
              <div className="product-price">
              <span className="old">$35.00</span>
                  <span>$29.00</span>
              </div>
              <div className="product-rating">
                  <div className="yellow" ><AiTwotoneStar/></div>
                  <div className="yellow" ><AiTwotoneStar/></div>
                  <div className="yellow" ><AiTwotoneStar/></div>
                  <div className="yellow" ><AiTwotoneStar/></div>
                  <div className="yellow" ><AiTwotoneStar/></div>
              </div>
          </div>
          </div>

          </Slider>

        </div>
      );
    }
}