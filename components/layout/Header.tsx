"use client";

import { Menu } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div
        className={`w-full flex items-center justify-between px-4 sm:px-10 transition-all duration-300 ${
          isScrolled ? "py-2.5 sm:py-4" : "py-4 sm:py-8"
        }`}
      >
        <div className="flex flex-col leading-tight text-white uppercase">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wider">TMI</h1>
        </div>
        <div className="block sm:hidden">
          <Button
            variant="default"
            icon={<Menu className="w-6 h-6" />}
           
          />
        </div>

        <div className="hidden min-[840px]:flex gap-8 items-center rounded-lg bg-slate-700/10 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden px-6 py-2">
          <Link
            href="#top"
            className="text-sm font-medium text-white hover:text-green-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-white hover:text-green-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-white hover:text-green-400 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#careers"
            className="text-sm font-medium text-white hover:text-green-400 transition-colors"
          >
            Careers
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-white hover:text-green-400 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="hidden sm:block">
          <Button variant="primary">Apply Now</Button>
        </div>
      </div>
    </header>
  );
}
