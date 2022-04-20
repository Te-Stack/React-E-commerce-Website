import { useTransitionCarousel, useSpringCarousel } from 'react-spring-carousel'


const Swiper = () => {
    const { carouselFragment } = useSpringCarousel({
        items: mockedItems.map((i) => ({
          id: i.id,
          renderItem: (
            <CarouselItem color={i.color}>
              {i.title}
            </CarouselItem>
          ),
        })),
      });
  
    return ( 
    
    <div>
         {carouselFragment}
      </div>
     );
}
 
export default Swiper;