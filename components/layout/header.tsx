import Image from "next/image";
import logo from "../../public/assets/icons/logo/logo.png";

import Button from "../ui/button";
import { Menu } from "lucide-react";

import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b-[1px] border-[#cfcfcf] bg-background sticky top-0 z-30 w-full">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="TMI logo"
            className="h-12 w-auto object-contain"
            priority
          />
          <div className="flex flex-col leading-tight text-primary uppercase">
            <h1 className="text-xl font-black tracking-wider">TMI</h1>
            <div className="text-xs font-bold pl-1 tracking-wide">
              TUTELA MARINE INC.
            </div>
          </div>
        </div>

        {/* Menu Btn for Mobile Layout */}
        <Button
          variant="default"
          icon={<Menu className="w-4 h-4" />}
          className="block min-[840px]:hidden"
        />

        <div className="hidden min-[840px]:flex gap-4 items-center">
          <Link className="nav-link" href="#top">
            Home
          </Link>
          <Link className="nav-link" href="#about">
            About Us
          </Link>
          <Link className="nav-link" href="#services">
            Services
          </Link>
          <Link className="nav-link" href="#careers">
            Careers
          </Link>
          <Link className="nav-link" href="#contact">
            Contact Us
          </Link>
          <Button variant="primary">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
