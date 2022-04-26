import { Component } from "react";
import "./fslider.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




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
            <div className="carouselCard">
                <div>
                  Men's Dress
                </div>
            </div>

            <div  className="carouselCard2">
              <div>
                Women's Dress
              </div>
            </div>

            <div  className="carouselCard3">

                <div>
                  Kids
                </div>
            </div>

          </Slider>

        </div>
      );
    }
}