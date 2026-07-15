import Image from "next/image";
import logo from "../../public/assets/icons/logo/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col bg-tertiary mt-auto w-full box-border">
      <div className="flex mx-auto max-w-7xl bg-tertiary text-white py-6 sm:py-10">
        {/* Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <div>
            <Image
              src={logo}
              className="h-14 w-auto"
              alt="Tutela Marine Logo"
            />
          </div>
          <div>
            <p className="text-2xl font-black tracking-wider">TMI</p>
            <p className="text-sm">Your trusted partner in marine solutions.</p>
          </div>
        </div>
        {/* Footer Content */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 ml-auto">
          <p>Contact Us</p>
          <p>QuickLinks</p>
        </div>

      </div>

      {/* Credits Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 bg-secondary py-4 sm:py-6 text-center text-xs sm:text-sm text-white">
        <p>© 2026 Tutela Marine Inc. All rights reserved.</p>
        <span className="hidden sm:inline text-white/40">|</span>
        <p className="text-white/80">
          Developed by{" "}
          <Link
            href="https://cjabendan.is-a.dev/"
            target="_blank"
            className="font-semibold text-white"
          >
            Christian James Abendan
          </Link>
        </p>
      </div>
    </div>
  );
}
