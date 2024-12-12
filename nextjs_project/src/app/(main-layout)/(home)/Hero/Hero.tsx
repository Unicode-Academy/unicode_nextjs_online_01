import Image from "next/image";
import image from "./images/hero-img.jpg";
import hero1 from "./images/hero-img-1.png";
import hero2 from "./images/hero-img-2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <section
      className="h-[500px]"
      style={{ backgroundImage: `url(${image.src})`, backgroundSize: "cover" }}
    >
      <div className="container h-full">
        <div className="flex h-full">
          <div className="w-1/2 flex aligns-center flex-col justify-center">
            <h2 className="text-secondaryColor text-[2.4rem] font-[600]">
              100% Organic Foods
            </h2>
            <h1 className="text-primaryColor text-[6.4rem] font-[800]">
              Organic Veggies & Fruits Foods
            </h1>
          </div>
          <div className="w-1/2 flex aligns-center flex-col justify-center">
            <Carousel className="rounded-[10px] bg-secondaryColor ">
              <CarouselContent>
                <CarouselItem className="relative">
                  <Image src={hero1} alt="Hero1" className="rounded-[10px]" />
                  <a
                    href="#"
                    className={`absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[2.4rem] bg-[linear-gradient(rgba(255,_181,_36,_0.7),_rgba(255,_181,_36,_0.7))] px-7 py-3 rounded-[10px] text-[#fff] hover:text-[#fff]`}
                  >
                    Fruites
                  </a>
                </CarouselItem>
                <CarouselItem className="relative">
                  <Image
                    src={hero2}
                    alt="Hero2"
                    style={{ width: "100%" }}
                    className="rounded-[10px]"
                  />
                  <a
                    href="#"
                    className={`absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-[2.4rem] bg-[linear-gradient(rgba(255,_181,_36,_0.7),_rgba(255,_181,_36,_0.7))] px-7 py-3 rounded-[10px] text-[#fff] hover:text-[#fff]`}
                  >
                    Fruites
                  </a>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
