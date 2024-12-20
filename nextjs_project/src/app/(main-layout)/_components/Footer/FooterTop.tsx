import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
export default function FooterTop() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link href={"/"}>
          <span className="block text-[4rem] font-[600]">Fruitables</span>
          <span className="text-secondaryColor">Fresh products</span>
        </Link>
      </div>
      <div className="flex w-[50%]">
        <Input
          placeholder="Your email"
          className="border-0 bg-white py-10 px-5 lg:text-[1.6rem] rounded-full rounded-tr-none rounded-br-none"
        />
        <Button
          size={null}
          className="py-5 px-5 lg:text-[1.6rem] bg-primaryColor text-white rounded-full rounded-tl-none rounded-bl-none"
        >
          Subscribe Now
        </Button>
      </div>
      <div className="flex gap-3">
        <Link href={""}>
          <Twitter />
        </Link>
        <Link href={""}>
          <Facebook />
        </Link>
        <Link href={""}>
          <Youtube />
        </Link>
        <Link href={""}>
          <Linkedin />
        </Link>
      </div>
    </div>
  );
}
