import { Button } from "@/components/ui/button";
import Link from "next/link";
import paymentImage from "./images/payment.png";
import Image from "next/image";

export default function FooterInner() {
  return (
    <div className="grid grid-cols-4 gap-10 mt-10">
      <div>
        <p className="text-[#f4f6f8] text-[2.4rem] font-[600] mb-5">
          Why People Like us!
        </p>
        <p className="leading-loose">
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the like Aldus PageMaker including of Lorem Ipsum.
        </p>
        <Button
          variant={`outline`}
          size={null}
          className="bg-transparent text-primaryColor border-secondaryColor mt-10 lg:text-[1.6rem] px-10 py-5 font-[600] rounded-full"
        >
          Read more
        </Button>
      </div>

      <div>
        <p className="text-[#f4f6f8] text-[2.4rem] font-[600] mb-5">
          Shop Info
        </p>
        <ul className="leading-loose">
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-[#f4f6f8] text-[2.4rem] font-[600] mb-5">Account</p>
        <ul className="leading-loose">
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[#f4f6f8] text-[2.4rem] font-[600] mb-5">Contact</p>
        <div className="leading-loose mb-10">
          <p>Address: 1429 Netus Rd, NY 48247</p>
          <p>Email: Example@gmail.com</p>
          <p>Phone: +0123 4567 8910</p>
          <p>Payment Accepted</p>
        </div>
        <Image src={paymentImage} alt="Payment" />
      </div>
    </div>
  );
}
