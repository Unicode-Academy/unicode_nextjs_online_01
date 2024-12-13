import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import servie01 from "./images/featur-1.jpg";
import servie02 from "./images/featur-3.jpg";
import servie03 from "./images/featur-2.jpg";
export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid-cols-3 grid gap-10">
          <Card>
            <CardContent>
              <Link href={"#"}>
                <Image src={servie01} alt="Service 1" />
              </Link>
            </CardContent>
            <CardFooter className="bg-secondaryColor py-20 relative">
              <div className="bg-primaryColor w-[60%] mx-auto rounded-[10px] px-20 py-10 absolute top-0 left-0 right-0 transform -translate-y-1/2 text-center">
                <h2 className="text-[2rem] font-[600] text-white">
                  Fresh Apples
                </h2>
                <span className="text-[2.8rem] font-[600] text-[rgb(69,89,91)]">
                  20% OFF
                </span>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardContent>
              <Link href={"#"}>
                <Image src={servie02} alt="Service 2" />
              </Link>
            </CardContent>
            <CardFooter className="bg-secondaryColor py-20 relative">
              <div className="bg-primaryColor w-[60%] mx-auto rounded-[10px] px-20 py-10 absolute top-0 left-0 right-0 transform -translate-y-1/2 text-center">
                <h2 className="text-[2rem] font-[600] text-white">
                  Fresh Apples
                </h2>
                <span className="text-[2.8rem] font-[600] text-[rgb(69,89,91)]">
                  20% OFF
                </span>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardContent>
              <Link href={"#"}>
                <Image src={servie03} alt="Service 3" />
              </Link>
            </CardContent>
            <CardFooter className="bg-secondaryColor py-20 relative">
              <div className="bg-primaryColor w-[60%] mx-auto rounded-[10px] px-20 py-10 absolute top-0 left-0 right-0 transform -translate-y-1/2 text-center">
                <h2 className="text-[2rem] font-[600] text-white">
                  Fresh Apples
                </h2>
                <span className="text-[2.8rem] font-[600] text-[rgb(69,89,91)]">
                  20% OFF
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
