import Link from "next/link";
import React from "react";

export default function Bottom() {
  return (
    <div className="w-full bg-maritime-gradient border-t border-white/10 py-4 sm:py-6 text-xs sm:text-sm text-white/80">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4 lg:px-8">
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
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="#privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <span className="inline text-white/20">|</span>
          <Link href="#terms" className="hover:text-white transition-colors">
            Terms & condition
          </Link>
        </div>
      </div>
    </div>
  );
}
