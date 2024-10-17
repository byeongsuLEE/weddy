import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import ***REMOVED*** Card, CardContent ***REMOVED*** from "../ui/card"
import ***REMOVED***
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious
***REMOVED*** from "../ui/carousel"

export const MainCarousel = () => ***REMOVED***
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
          ***REMOVED***Array.from(***REMOVED*** length: 5 ***REMOVED***).map((_, index) => (
            <CarouselItem key=***REMOVED***index***REMOVED***>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">***REMOVED***index + 1***REMOVED***</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))***REMOVED***
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    </>
  )
***REMOVED***
