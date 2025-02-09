import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import { Card, CardContent } from "../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious
} from "../ui/carousel"

interface ImageData {
  imageUrl: string;
}

interface MainCarouselProps {
  imageList: ImageData[] | string[] | undefined;
}


export const MainCarousel = ({ imageList }: MainCarouselProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
        {imageList?.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent>
                <a href={index === 0 ? '/board' : index === 1 ? '/schedule' : index === 2 ?'/contract/list': '/prompt'}>
                  <img
                    className="w-full h-full object-cover"
                    src={typeof item === 'string' ? item : item.imageUrl}
                    alt="제품 상세 이미지"
                  />
                </a>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}

        </CarouselContent>
        <CarouselPrevious />
      </Carousel>
    </>
  )
}
