import { useTransitionCarousel, useSpringCarousel } from 'react-spring-carousel'


const Swiper = () => {
    const { carouselFragment } = useSpringCarousel({
        items: [
          {
            id: 'item-1',
            renderItem: (
              <div>Item 1</div>
            )
          },
          {
            id: 'item-2',
            renderItem: (
              <div>Item 2</div>
            )
          }
        ]
      })
    return ( 
    
    <div>
         {carouselFragment}
      </div>
     );
}
 
export default Swiper;