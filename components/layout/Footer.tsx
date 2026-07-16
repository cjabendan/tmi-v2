import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Links from "../ui/Links";

import { contacts, socials, columns } from "@/data/links.json";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white w-full">
      {/* Upper Section */}
      <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-16 pb-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-12">
          <h2 className="text-xl sm:text-4xl font-medium max-w-md tracking-tight leading-snug">
            Your Trusted Partner in Marine Solutions — Securing Excellence at
            Sea.
          </h2>
          {/* Newsletter Form */}
          <div className="flex flex-col gap-3 w-full md:max-w-md">
            <span className="text-sm sm:text-lg font-medium tracking-wider">
              Stay Connected: Receive Company News and Career Insights
            </span>
            <form className="flex items-center justify-between border border-white/20 rounded-sm p-1 pl-4 bg-transparent focus-within:border-white/45 transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
                required
              />
              <Button variant="primary" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-white uppercase">
              Contact Information
            </h3>
            {/* Loop Contacts */}
            <div className="flex flex-col gap-3">
              {contacts.map((contact) => (
                <Links
                  key={contact.label}
                  variant="default"
                  link={contact.href}
                  icon={
                    <Image
                      src={contact.svgPath}
                      alt={contact.label}
                      width={20}
                      height={20}
                      className="h-4 w-4 invert opacity-60"
                    />
                  }
                >
                  {contact.label}
                </Links>
              ))}
            </div>

            {/* Loop Socials */}
            <div className="flex items-center flex-wrap gap-3">
              {socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all items-center justify-center"
                  aria-label={social.platform}
                >
                  <Image
                    src={social.svgPath}
                    alt={social.platform}
                    width={20}
                    height={20}
                    className="h-5 w-5 sm:h-7 sm:w-7 invert opacity-60 hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Loop Columns*/}
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold tracking-widest text-white uppercase">
                {col.title}
              </h3>
              <div className="flex flex-col gap-2 text-sm text-white/80">
                {col.links.map((item, itemIndex) => (
                  <Links
                    key={itemIndex}
                    variant="secondary"
                    link={item.href}
                    icon={
                      <MoveRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
                    }
                  >
                    {item.label}
                  </Links>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-maritime-gradient border-t border-white/10 py-6 text-xs sm:text-sm text-white/80">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>© 2026 Tutela Marine Inc. All Rights Reserved.</p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p>
              Developed by{" "}
              <Link
                href="https://cjabendan.is-a.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/80 hover:text-white hover:underline transition-colors"
              >
                Christian James Abendan
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#privacy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms & condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
