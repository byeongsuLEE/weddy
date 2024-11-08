import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import ***REMOVED*** Card, CardContent ***REMOVED*** from "../ui/card"
import ***REMOVED***
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious
***REMOVED*** from "../ui/carousel"

interface ImageData ***REMOVED***
  imageUrl: string;
***REMOVED***

interface MainCarouselProps ***REMOVED***
  imageList: ImageData[] | string[] | undefined;
***REMOVED***


export const MainCarousel = (***REMOVED*** imageList ***REMOVED***: MainCarouselProps) => ***REMOVED***
  const plugin = React.useRef(
    Autoplay(***REMOVED*** delay: 2000, stopOnInteraction: true ***REMOVED***)
  )

  return (
    <>
      <Carousel
        plugins=***REMOVED***[plugin.current]***REMOVED***
        className="w-full"
        onMouseEnter=***REMOVED***plugin.current.stop***REMOVED***
        onMouseLeave=***REMOVED***plugin.current.reset***REMOVED***
      >
        <CarouselContent>
        ***REMOVED***imageList?.map((item, index) => (
          <CarouselItem key=***REMOVED***index***REMOVED***>
            <Card>
              <CardContent>
                <a href=***REMOVED***index === 0 ? '/board' : index === 1 ? '/schedule' : index === 2 ?'/contract/list': '/prompt'***REMOVED***>
                  <img
                    className="w-full h-full object-cover"
                    src=***REMOVED***typeof item === 'string' ? item : item.imageUrl***REMOVED***
                    alt="제품 상세 이미지"
                  />
                </a>
              </CardContent>
            </Card>
          </CarouselItem>
        ))***REMOVED***

        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    </>
  )
***REMOVED***
