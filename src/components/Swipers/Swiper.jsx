import { useTransitionCarousel } from 'react-spring-carousel'
import  { useEffect } from 'react';
import "./swiper.scss"
import img1 from "../../assets/images/slider/img-slide2-01-4.jpg";
import img2 from "../../assets/images/slider/img-slide2-03-2.jpg";
import img3 from "../../assets/images/slider/img-slide2-04-1.jpg";
import { Link } from 'react-router-dom';

const Swiper = () => {
    const { 
        carouselFragment, 
        slideToPrevItem, 
        slideToNextItem 
      } = useTransitionCarousel({
        withLoop: true, // -> make me loop!
        items: [
            {
                id: "1",
                renderItem: (
                    <div>
                        <div className="items">
                            <div className="text">
                                    <p>#boots collection</p>
                                        <h1 className="text-2xl">Lace-Up leather shoes</h1>
                                    <p className="dollars" >$99.99</p>
                                    <Link to="/Shop"><button><span>Shop now</span></button> </Link>
                                    
                            </div>
                            <div>
                                <img alt="shoes" src={img1} />

                            </div>
                        </div>

                    </div>
                  
                )
            },
            {
                id: "2",
                renderItem: (
                    <div>
                      <div className="items">
                            <div className='text'>
                                    <p className="text-sm">#coatCollection</p>
                                    <div className="bor">
                                        <h1 className="text-2xl">Chunky Knit Sweaters</h1>
                                    </div>
                                    <p className="dollars">$69.99</p>
                                    <Link to="/Shop"><button><span>Shop now</span></button></Link>
                                     
                            </div>
                            
                            <div>
                                <img alt="Sweaters" src={img2} />

                            </div>
                        </div>

                    </div>
                )
            },
            {
                id: "3",
                renderItem: (
                    <div>
                        <div className="items">
                            <div className='text'>
                                        <p className='text-sm'>#kidCollection</p>
                                        <div className="bor">
                                            <h1 className="text-2xl">Hood quilted coats</h1>
                                        </div>
                                        <p className="dollars">$69.99</p>
                                        <Link to="/Shop"><button><span>Shop now</span></button>  </Link>       
                            </div>
                            <div>
                                <img alt="coats" src={img3} />

                            </div>
                        </div>
                    </div>
                )
            }
        ]
      });

     useEffect(() => {
        const timer = setInterval(() => {
          slideToNextItem();
        }, 4500);
        return () => {
          window.clearInterval(timer);
        };
        // You MUST add the slide methods to the dependency list useEffect!
      }, [slideToNextItem,slideToPrevItem]);
  
    return ( 
      <div className="swiper">
        <button className="but1" onClick={slideToPrevItem}>&lt;</button>
        {carouselFragment}
        <button className="but2" onClick={slideToNextItem}>&gt;</button>
      </div>
     );
}
 
export default Swiper;