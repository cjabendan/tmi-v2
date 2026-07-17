import React from "react";
import StatsCard from "../cards/StatsCard";
import Links from "../ui/Links";

import { MoveUpRight } from "lucide-react";

function Hero(): React.JSX.Element {
  return (
    <section className="w-full relative overflow-visible mx-auto">
      <div
        className="absolute top-0 left-0 w-full h-[70vh] sm:h-[80vh] bg-cover bg-[position:65%_center] md:bg-right-center bg-no-repeat z-1"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 86, 177, 0.9) 0%, rgba(0, 86, 177, 0.4) 50%, rgba(40, 167, 70, 0.3) 100%), url('/assets/image/background/hero-bg.png')`,
        }}
      />

      {/* Hero Content Area */}
      <div className="relative z-2 w-full h-[70vh] sm:h-[80vh] flex flex-col justify-center mx-auto max-w-7xl px-6">
        <div className="flex flex-col max-w-[620px] text-secondary items-start gap-0 sm:gap-2">
          <span className="text-xs sm:text-sm font-bold tracking-[3px] uppercase text-green-400 mb-3 drop-shadow-md">
            Tutela Marine Inc.
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[54px] leading-[1.1] font-bold tracking-[0.5px] text-white uppercase drop-shadow-2xl mb-4">
            Dedicated provider of quality maritime solutions.
          </h1>
          <p className="text-sm md:text-xl leading-relaxed tracking-[0.5px] text-white/90 max-w-[520px] drop-shadow-md border-l-2 border-green-400 pl-4 my-2">
            Serving Elite Principles. Empowering Seafarers. Training for the
            Future.
          </p>
          <div className="w-full mt-4 p-2 rounded-sm bg-slate-500/10 backdrop-blur-md border border-white/10 max-w-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <Links
              variant="default"
              href="#trainings"
              className="flex-1 items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 transition text-center shadow-lg"
            >
             Available Trainings
            </Links>
            <Links
              variant="default"
              icon={<MoveUpRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />}
              href="#careers"
              className="flex-1 items-center justify-center px-4 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition text-center"
            >
              Explore Crew Careers
            </Links>
          </div>
        </div>
      </div>

      <StatsCard />
    </section>
  );
}

export default Hero;
