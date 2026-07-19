"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../../public/assets/icons/logo/logo.png";

import { Menu } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-[1px] ${
        isScrolled
          ? "bg-slate-950/20 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="TMI logo"
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
          <div className="flex flex-col leading-tight text-white uppercase">
            <h1 className="text-xl font-bold tracking-wider">TMI</h1>
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
          <Link href="#top" className="text-white hover:text-green-400">
            Home
          </Link>
          <Link href="#about" className="text-white hover:text-green-400">
            About Us
          </Link>
          <Link href="#services" className="text-white hover:text-green-400">
            Services
          </Link>
          <Link href="#careers" className="text-white hover:text-green-400">
            Careers
          </Link>
          <Link href="#contact" className="text-white hover:text-green-400">
            Contact Us
          </Link>
          <Button variant="primary">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
