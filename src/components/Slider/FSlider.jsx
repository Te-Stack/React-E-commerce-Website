import { Component } from "react";
import "./fslider.scss";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img3 from "../../assets/images/product/category-1.jpg";
import img4 from "../../assets/images/product/category-2.jpg";
import img5 from "../../assets/images/product/category-3.jpg";



export default class Carousels extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
          <Slider {...settings}>
            
            <div className="category-wrap">
              <div className="default-overlay">
              <Link to="/ProductDetail/Men" ><img src={img3} alt="product"/></Link>
              <div className="category-content">
                    <h4><Link to="/ProductDetail/Men">Men Jacket</Link></h4>
                 </div>
              </div>
              
           </div>
            <div className="category-wrap default-overlay">
              <Link to="/ProductDetail/Women" ><img src={img4} alt="product"/></Link>
              <div className="category-content">
                    <h4><Link to="/ProductDetail/Women">Women Dress</Link></h4>
                 </div>
           </div>
            <div className="category-wrap default-overlay">
              <Link to="/ProductDetail/Child" ><img src={img5} alt="product"/></Link>
              <div className="category-content">
                    <h4><Link to="/ProductDetail/Child">Kid</Link></h4>
                 </div>
           </div>
            <div className="category-wrap default-overlay">
              <Link to="/ProductDetail/Women" ><img src={img4} alt="product"/></Link>
              <div className="category-content">
                    <h4><Link to="/ProductDetail/Women">Women Dress</Link></h4>
                 </div>
           </div>
            

          </Slider>

        </div>
      );
    }
}