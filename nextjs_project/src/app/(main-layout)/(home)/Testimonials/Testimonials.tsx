import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Quote } from "lucide-react";
export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-primaryColor text-[2.4rem] font-[600] text-center">
            Our Testimonial
          </h2>
          <h3 className="text-[rgb(69,89,91)] text-[4.8rem] font-[800] text-center">
            Our Client Saying!
          </h3>
        </div>
        <Carousel>
          <CarouselContent className="gap-5">
            <CarouselItem className="basis-1/2 bg-[#f4f6f8] p-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing Ipsum has been
                the industry standard dummy text ever since the 1500s,
              </p>
              <Separator className="my-5" />
              <div className="flex -mx-5 items-center">
                <div className="w-1/5 px-5">
                  <Image
                    src={`/images/testimonial-1.jpg`}
                    alt="Testimonial 01"
                    width={500}
                    height={500}
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="rounded-[10px]"
                  />
                </div>
                <div className="w-[70%] px-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis optio nesciunt, aliquam ab ad cum. Quo et, ipsum
                  beatae id magnam ducimus vitae iste pariatur soluta enim!
                  Aliquam, distinctio doloribus.
                </div>
                <div className="w-[10%] px-5">
                  <Quote size={30} className="stroke-secondaryColor" />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 bg-[#f4f6f8] p-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing Ipsum has been
                the industry standard dummy text ever since the 1500s,
              </p>
              <Separator className="my-5" />
              <div className="flex -mx-5 items-center">
                <div className="w-1/5 px-5">
                  <Image
                    src={`/images/testimonial-1.jpg`}
                    alt="Testimonial 01"
                    width={500}
                    height={500}
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="rounded-[10px]"
                  />
                </div>
                <div className="w-[70%] px-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis optio nesciunt, aliquam ab ad cum. Quo et, ipsum
                  beatae id magnam ducimus vitae iste pariatur soluta enim!
                  Aliquam, distinctio doloribus.
                </div>
                <div className="w-[10%] px-5">
                  <Quote size={30} className="stroke-secondaryColor" />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 bg-[#f4f6f8] p-5">
              <p>
                Lorem Ipsum is simply dummy text of the printing Ipsum has been
                the industry standard dummy text ever since the 1500s,
              </p>
              <Separator className="my-5" />
              <div className="flex -mx-5 items-center">
                <div className="w-1/5 px-5">
                  <Image
                    src={`/images/testimonial-1.jpg`}
                    alt="Testimonial 01"
                    width={500}
                    height={500}
                    style={{ maxWidth: "100%", height: "auto" }}
                    className="rounded-[10px]"
                  />
                </div>
                <div className="w-[70%] px-5">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis optio nesciunt, aliquam ab ad cum. Quo et, ipsum
                  beatae id magnam ducimus vitae iste pariatur soluta enim!
                  Aliquam, distinctio doloribus.
                </div>
                <div className="w-[10%] px-5">
                  <Quote size={30} className="stroke-secondaryColor" />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
