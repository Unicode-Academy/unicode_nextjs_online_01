import { Users } from "lucide-react";

export default function Fact() {
  return (
    <section className="py-20">
      <div className="container bg-[#f4f6f8] rounded-[10px] p-[30px]">
        <div className="grid-cols-4 grid gap-10">
          <div className="bg-white p-[20px] rounded-[10px] flex flex-col items-center">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <h2 className="uppercase text-primaryColor font-[600] text-[2.4rem] py-5 text-center">
              satisfied customers
            </h2>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
          <div className="bg-white p-[20px] rounded-[10px] flex flex-col items-center">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <h2 className="uppercase text-primaryColor font-[600] text-[2.4rem] py-5 text-center">
              satisfied customers
            </h2>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
          <div className="bg-white p-[20px] rounded-[10px] flex flex-col items-center">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <h2 className="uppercase text-primaryColor font-[600] text-[2.4rem] py-5 text-center">
              satisfied customers
            </h2>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
          <div className="bg-white p-[20px] rounded-[10px] flex flex-col items-center">
            <Users className="w-[50px] h-[50px] stroke-secondaryColor" />
            <h2 className="uppercase text-primaryColor font-[600] text-[2.4rem] py-5 text-center">
              satisfied customers
            </h2>
            <span className="text-[#45595b] font-[600] text-[4rem]">1963</span>
          </div>
        </div>
      </div>
    </section>
  );
}
