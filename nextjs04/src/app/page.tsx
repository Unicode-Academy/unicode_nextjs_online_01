"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-5xl my-3 border-b-2 pb-2">HomePage</h1>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Image
        src={{
          src: "https://cdnphoto.dantri.com.vn/isBy9cSHv2uK1w0MLQY5ghto-3c=/zoom/774_516/2024/11/28/ong-tran-hong-minhphamthang-edited-1732758145950.jpeg",
          width: 1000,
          height: 1000,
        }}
        style={{
          maxWidth: "300px",
          height: "300px",
        }}
        alt="Ảnh 01"
        quality={100}
        className="rounded-full"
      />
      {/* <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          console.log("ok");
        }}
      >
        Xem thêm
      </a> */}
      {/* <Posts />
      <Products /> */}
      <h2>Câu hỏi thường gặp</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
