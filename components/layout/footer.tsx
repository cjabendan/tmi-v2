import Link from "next/link";
import { Mail, Phone, MoveRight } from "lucide-react";
import Links from "../ui/links";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white w-full">
      {/* ================= UPPER SECTION (Constrained Container) ================= */}
      <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-16 pb-12 lg:px-8">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-12">
          {/* Tagline / Catchphrase */}
          <h2 className="text-xl sm:text-3xl font-normal max-w-md tracking-tight leading-snug">
            Your Trusted Partner in Marine Solutions — Securing Excellence at
            Sea.
          </h2>

          {/* Newsletter / Pill-shaped Subscribe */}
          <div className="flex flex-col gap-3 w-full md:max-w-md">
            <span className="text-sm sm:text-lg font-medium tracking-wider">
              Subscribe for Updates and Career Opportunities
            </span>
            <form className="flex items-center justify-between border border-white/20 rounded-full p-1 pl-4 bg-transparent focus-within:border-white/45 transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-primary-light transition-colors text-white text-sm font-medium rounded-full shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase">
              Contact Information
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:support@tutelamarine.com"
                  className="hover:text-white transition-colors"
                >
                  support@tutelamarine.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+180032328686"
                  className="hover:text-white transition-colors"
                >
                  1800-3232-8686
                </a>
              </li>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full"
                aria-label="Facebook"
              >
                <Phone className="h-5 w-5 fill-white text-transparent" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full"
                aria-label="Instagram"
              >
                <Phone className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full"
                aria-label="Youtube"
              >
                <Phone className="h-5 w-5 fill-white text-transparent" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase">
              Company
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Links
                variant="secondary"
                href="/branches"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                Branches
              </Links>

              <Links
                variant="secondary"
                href="#about"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                About Us
              </Links>

              <Links
                variant="secondary"
                href="#contact"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                Community
              </Links>

              <Links
                variant="secondary"
                href="#careers"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                Seafearers
              </Links>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Links
                variant="secondary"
                href="#faq"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                Careers
              </Links>

              <Links
                variant="secondary"
                href="#help"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                Trainings
              </Links>

              <Links
                variant="secondary"
                href="#support"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                Contact
              </Links>
            </div>
          </div>

          {/* Column 4: Help */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase">
              Help & Support
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/80">
              <Links
                variant="secondary"
                href="#faq"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                FAQ
              </Links>

              <Links
                variant="secondary"
                href="#help"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                Help Center
              </Links>

              <Links
                variant="secondary"
                href="#support"
                icon={<MoveRight className="h-4 w-4 shrink-0" />}
              >
                Support
              </Links>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
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
