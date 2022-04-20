import { useTransitionCarousel } from 'react-spring-carousel'
import  { useEffect } from 'react';
import "./swiper.scss"
import img1 from "../../assets/images/slider/img-slide2-01-4.jpg";


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
                            <div>
                                <p>#coatCollection</p>
                                <div>
                                    <p></p>
                                    <h1>Chunky Knit Sweater</h1>
                                </div>
                                <p>$69.99</p>
                                <button>Shop Now</button> 
                            </div>
                            <div>
                                <img src={img1} />

                            </div>
                        </div>

                    </div>
                  
                )
            },
            {
                id: "2",
                renderItem: (
                    <div>
                        <div className="items">Item 2</div>

                    </div>
                )
            },
            {
                id: "3",
                renderItem: (
                    <div>
                        <div className="items">Item 3</div>
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
        <button onClick={slideToPrevItem}>&lt;</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>&gt;</button>
      </div>
     );
}
 
export default Swiper;