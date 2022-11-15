import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function CarouselComp() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
        <Carousel className="border w-full">
          <div
            className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white"
            id="slide1"
          >
            <Image
              src="/images/carousel_beach.png"
              width={1920}
              height={600}
              alt="Carousel image 1"
            />
          </div>
          <div
            className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white"
            id="slide2"
          >
            <Image
              src="/images/carousel_miami.png"
              width={1920}
              height={600}
              alt="Carousel image 1"
            />
          </div>
          <div
            className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white"
            id="slide3"
          >
            <Image
              src="/images/carousel_sunset.png"
              width={1920}
              height={600}
              alt="Carousel image 1"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
