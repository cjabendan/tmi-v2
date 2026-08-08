"use client";

import { Menu, MoveUpRight } from "lucide-react";
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

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-slate-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <div
        className={`w-full flex items-center justify-between px-6 sm:px-12 transition-all duration-300 ${
          isScrolled ? "py-5 sm:py-4" : "py-6 sm:py-10"
        }`}
      >
        {/* Logo */}
        <div>
          <h1
            className={`text-xl sm:text-3xl font-bold tracking-wider uppercase transition-colors ${
              isScrolled ? "text-tertiary" : "text-white"
            }`}
          >
            TMI
          </h1>
        </div>

        {/* Mobile Menu Icon */}
        <div className="block sm:hidden">
          <button type="button">
            <Menu
              className={`w-6 h-6 transition-colors ${isScrolled ? "text-tertiary" : "text-white"}`}
            />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden min-[840px]:flex gap-8 items-center rounded-lg transition-all duration-300 px-6 py-3 ${
            isScrolled
              ? "bg-transparent border border-transparent shadow-none"
              : "bg-slate-700/10 backdrop-blur-md border border-white/10 shadow-lg"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-semibold transition-colors ${
                isScrolled
                  ? "text-slate-700 hover:text-green-600"
                  : "text-white hover:text-green-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden sm:block">
          <Button variant="primary">Apply Now</Button>
        </div>
      </div>
    </header>
  );
}
