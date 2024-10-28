import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import ***REMOVED*** Card, CardContent ***REMOVED*** from "../ui/card"
import ***REMOVED***
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious
***REMOVED*** from "../ui/carousel"

interface MainCarouselProps ***REMOVED***
  dummyData: string[];
***REMOVED***


export const MainCarousel = (***REMOVED*** dummyData ***REMOVED***: MainCarouselProps) => ***REMOVED***
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
          ***REMOVED***/* 이미지 리스트 넣기 */***REMOVED***
          ***REMOVED***dummyData.map((imgdata, index) => (
            <CarouselItem key=***REMOVED***index***REMOVED***>
              <Card>
                <CardContent>
                  <a href=***REMOVED***index === 0 ? '/board' : index === 1 ? '/schedule' : '/contract/list'***REMOVED***>
                    <img className="w-full h-full object-cover" src=***REMOVED***imgdata***REMOVED*** alt="제품 상세 이미지" />
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
