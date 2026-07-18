import Image from "next/image";
import logo from "../../public/assets/icons/logo/logo.png";
import { Menu } from "lucide-react";
import Links from "../ui/Links";
import Button from "../ui/Button";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full border-b-[1px] border-white/10 bg-slate-950/6 backdrop-blur-md z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="TMI logo"
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
          <div className="flex flex-col leading-tight text-white uppercase">
            <h1 className="text-xl font-black tracking-wider">TMI</h1>
            <div className="hidden sm:block text-xs font-bold pl-1 tracking-wide text-white/80">
              TUTELA MARINE INC.
            </div>
          </div>
        </div>
        <Button
          variant="default"
          icon={<Menu className="w-6 h-6" />}
          className="block min-[840px]:hidden"
        />

        <div className="hidden min-[840px]:flex gap-5 items-center">
          <Links
            variant="default"
            href="#top"
            className="text-white hover:text-green-400"
          >
            Home
          </Links>
          <Links
            variant="default"
            href="#about"
            className="text-white hover:text-green-400"
          >
            About Us
          </Links>
          <Links
            variant="default"
            href="#services"
            className="text-white hover:text-green-400"
          >
            Services
          </Links>
          <Links
            variant="default"
            href="#careers"
            className="text-white hover:text-green-400"
          >
            Careers
          </Links>
          <Links
            variant="default"
            href="#contact"
            className="text-white hover:text-green-400"
          >
            Contact Us
          </Links>
          <Button variant="primary">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
