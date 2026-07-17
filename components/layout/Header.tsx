import Image from "next/image";
import logo from "../../public/assets/icons/logo/logo.png";


import { Menu } from "lucide-react";

import Links from "../ui/Links";
import Button from "../ui/Button";

export default function Header() {
  return (
    <div className="border-b-[1px] border-[#cfcfcf] bg-background sticky top-0 z-30 w-full">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="TMI logo"
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
          <div className="flex flex-col leading-tight text-tertiary uppercase">
            <h1 className="text-xl font-black tracking-wider">TMI</h1>
            <div className="hidden sm:block text-xs font-bold pl-1 tracking-wide">
              TUTELA MARINE INC.
            </div>
          </div>
        </div>

        {/* Menu Btn for Mobile Layout */}
        <Button
          variant="default"
          icon={<Menu className="w-6 h-6" />}
          className="block min-[840px]:hidden"
        />

        <div className="hidden min-[840px]:flex gap-5 items-center">
          <Links variant="primary" href="#top">
            Home
          </Links>
          <Links variant="primary" href="#about">
            About Us
          </Links>
          <Links variant="primary" href="#services">
            Services
          </Links>
          <Links variant="primary" href="#careers">
            Careers
          </Links>
          <Links variant="primary" href="#contact">
            Contact Us
          </Links>
          <Button variant="primary">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
