import { useTransitionCarousel } from 'react-spring-carousel'
import  { useEffect } from 'react';
import "./swiper.scss"



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
                        <div className="items">Item 1</div>

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
        }, 1500);
        return () => {
          window.clearInterval(timer);
        };
        // You MUST add the slide methods to the dependency list useEffect!
      }, [slideToNextItem,slideToPrevItem]);
  
    return ( 
      <div className="swiper">
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
      </div>
     );
}
 
export default Swiper;