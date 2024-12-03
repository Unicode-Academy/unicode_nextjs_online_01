import { MapPin, Mail } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between bg-primaryColor p-[20px] text-white     rounded-tl-[230px] rounded-br-[230px] rounded-tr-[100px] rounded-bl-[100px]">
      <ul className="flex gap-6 text-[1.4rem]">
        <li>
          <a href="#" className="text-white flex items-center gap-2">
            <MapPin size={17} className="text-secondaryColor" /> 123 Street, New
            York
          </a>
        </li>
        <li>
          <a href="#" className="text-white flex items-center gap-2">
            <Mail size={17} className="text-secondaryColor" /> Email@Example.com
          </a>
        </li>
      </ul>
      <ul className="flex gap-3 text-[1.4rem]">
        <li>
          <a href="#" className="text-white hover:text-white">
            <span className="me-2 hover:text-secondaryColor">
              Privacy Policy
            </span>
            <span>/</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-white">
            <span className="me-2 hover:text-secondaryColor">Terms of Use</span>
            <span>/</span>
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-white">
            <span className="hover:text-secondaryColor">Sales and Refunds</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
