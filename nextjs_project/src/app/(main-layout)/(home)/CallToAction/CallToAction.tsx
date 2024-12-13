import { Button } from "@/components/ui/button";
import image from "./images/baner-1.png";
import Image from "next/image";
export default function CallToAction() {
  return (
    <section className="bg-secondaryColor h-[500px]">
      <div className="container h-full">
        <div className="flex h-full">
          <div className="h-full w-1/2 flex flex-col justify-center">
            <h2 className="text-white text-[6.4rem] font-[700] leading-[7.7rem]">
              Fresh Exotic Fruits
            </h2>
            <h2 className="text-[6.4rem] leading-[7.7rem]">in Our Store</h2>
            <p className="py-10">
              The generated Lorem Ipsum is therefore always free from repetition
              injected humour, or non-characteristic words etc.
            </p>
            <div>
              <Button
                variant="outline"
                size={null}
                className="px-[48px] py-[16px] text-[1.6rem] rounded-[999px] bg-transparent text-[rgb(69,89,91)] font-[600] border-[1.6px] hover:bg-primaryColor"
              >
                Buy
              </Button>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="relative h-[90%]">
              <div className="absolute top-0 left-0 bg-white rounded-[50%] w-[140px] h-[140px] flex justify-center items-center">
                <span className="text-[10rem] font-[600]">1</span>
                <span className="font-[600]">
                  <span className="text-[3.2rem]">50$</span>
                  <br />
                  <span className="text-[2.4rem]">kg</span>
                </span>
              </div>
              <Image
                src={image}
                alt="Banner"
                className="h-[80%] w-auto inline-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
