import React from "react";
import StatsCard from "../cards/StatsCard";
import { MoveUpRight } from "lucide-react";
import Button from "../ui/Button";

function Hero(): React.JSX.Element {
  return (
    <section className="w-full relative overflow-visible mx-auto">
      <div
        className="absolute top-0 left-0 w-full h-[100vh] sm:h-[100vh] bg-cover bg-[position:65%_center] md:bg-right-center bg-no-repeat z-1"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 86, 177, 0.9) 0%, rgba(0, 86, 177, 0.4) 50%, rgba(40, 167, 70, 0.45) 100%), url('/assets/image/background/hero-bg.png')`,
        }}
      />
      <div className="relative z-2 w-full h-[100vh] flex flex-col justify-center pb-32 sm:pb-40 mx-auto max-w-7xl px-6">
        <div className="flex flex-col max-w-[790px] text-secondary items-start gap-4 sm:gap-6">
          <span className="text-xs sm:text-sm font-bold tracking-[3px] uppercase text-green-400 drop-shadow-md">
            Tutela Marine Inc.
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-bold tracking-[0.5px] text-white uppercase drop-shadow-2xl">
            Dedicated provider of quality maritime solutions.
          </h1>

          <p className="text-base md:text-2xl leading-relaxed tracking-[0.5px] text-white/90 max-w-[520px] drop-shadow-md border-l-2 border-green-400 pl-4 my-1">
            Serving Elite Principles. Empowering Seafarers. Training for the
            Future.
          </p>

          <div className="flex items-center flex-wrap gap-2 sm:gap-4 mb-4">
            <Button variant="solid">Available Trainings</Button>
            <Button
              variant="transparent"
              icon={<MoveUpRight className="h-3 w-3 sm:h-4 sm:w-4" />}
            >
              Explore Crew Careers
            </Button>
          </div>
        </div>
        <StatsCard />
      </div>
    </section>
  );
}

export default Hero;