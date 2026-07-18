import React from "react";
import StatsCard from "../cards/StatsCard";

import { MoveUpRight } from "lucide-react";
import Button from "../ui/Button";

function Hero(): React.JSX.Element {
  return (
    <section className="w-full relative overflow-visible mx-auto">
      <div
        className="absolute top-0 left-0 w-full h-[80vh] bg-cover bg-[position:65%_center] md:bg-right-center bg-no-repeat z-1"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 86, 177, 0.9) 0%, rgba(0, 86, 177, 0.4) 50%, rgba(40, 167, 70, 0.45) 100%), url('/assets/image/background/hero-bg.png')`,
        }}
      />
      <div className="relative z-2 w-full h-[80vh] flex flex-col justify-center mx-auto max-w-7xl px-6">
        <div className="flex flex-col max-w-[620px] text-secondary items-start gap-2 sm:gap-3">
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
          <div className="mt-4 flex items-center flex-wrap gap-2 sm:gap-4">
            <Button variant="solid">
              Available Trainings
            </Button>
            <Button variant="transparent" icon={<MoveUpRight className="h-3 w-3"/>}>
              Explore Crew Careers
            </Button>
          </div>
        </div>
      </div>
      <StatsCard />
    </section>
  );
}

export default Hero;
