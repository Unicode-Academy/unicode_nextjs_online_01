import clsx from "clsx";
import { Star } from "lucide-react";
import Image from "next/image";

export default function CommentList() {
  return (
    <>
      <div className="flex mb-10">
        <div className="w-[110px]">
          <Image
            src={"https://themewagon.github.io/fruitables/img/avatar.jpg"}
            width={100}
            height={100}
            alt="Avatar"
          />
        </div>
        <div className="px-5">
          <p className="text-[1.4rem] text-[#747d88]">April 12, 2024</p>
          <div className="flex justify-between">
            <h3 className="font-[600] text-[2rem]">Jason Smith</h3>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const count = index + 1;
                return (
                  <Star
                    key={count}
                    size={16}
                    className={clsx(
                      "cursor-pointer hover:fill-primaryColor",
                      count <= 5 && "fill-primaryColor"
                    )}
                  />
                );
              })}
            </div>
          </div>
          <p>
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc. Susp endisse
            ultricies nisi vel quam suscipit
          </p>
        </div>
      </div>
      <div className="flex mb-10">
        <div className="w-[110px]">
          <Image
            src={"https://themewagon.github.io/fruitables/img/avatar.jpg"}
            width={100}
            height={100}
            alt="Avatar"
          />
        </div>
        <div className="px-5">
          <p className="text-[1.4rem] text-[#747d88]">April 12, 2024</p>
          <div className="flex justify-between">
            <h3 className="font-[600] text-[2rem]">Jason Smith</h3>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const count = index + 1;
                return (
                  <Star
                    key={count}
                    size={16}
                    className={clsx(
                      "cursor-pointer hover:fill-primaryColor",
                      count <= 5 && "fill-primaryColor"
                    )}
                  />
                );
              })}
            </div>
          </div>
          <p>
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc. Susp endisse
            ultricies nisi vel quam suscipit
          </p>
        </div>
      </div>
      <div className="flex mb-10">
        <div className="w-[110px]">
          <Image
            src={"https://themewagon.github.io/fruitables/img/avatar.jpg"}
            width={100}
            height={100}
            alt="Avatar"
          />
        </div>
        <div className="px-5">
          <p className="text-[1.4rem] text-[#747d88]">April 12, 2024</p>
          <div className="flex justify-between">
            <h3 className="font-[600] text-[2rem]">Jason Smith</h3>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const count = index + 1;
                return (
                  <Star
                    key={count}
                    size={16}
                    className={clsx(
                      "cursor-pointer hover:fill-primaryColor",
                      count <= 5 && "fill-primaryColor"
                    )}
                  />
                );
              })}
            </div>
          </div>
          <p>
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc. Susp endisse
            ultricies nisi vel quam suscipit
          </p>
        </div>
      </div>
    </>
  );
}
