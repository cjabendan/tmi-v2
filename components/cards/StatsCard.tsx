import CountUp from "../animations/CountUp";
import GradientIcon, { IconName } from "../ui/GradientIcon";
import statsData from "../../data/stats.json";

interface StatItem {
  id: string;
  icon: IconName;
  value: number;
  label: string;
}

export default function StatsCard() {
  const typedStatsData = statsData as StatItem[];

  return (
  <div className="absolute bottom-10 sm:bottom-20 left-6 w-[calc(100%-3rem)] flex flex-col lg:flex-row rounded-lg bg-slate-950/20 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
      
      {/* 1. LEFT SIDE: Icon & Stat Grid Layout */}
      <div className="grid grid-cols-3 w-full lg:w-[65%] py-4 lg:py-6 px-3 lg:px-6">
        {typedStatsData.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-2 sm:gap-4 flex-1 border-r border-white/10 last:border-r-0 px-1 sm:px-2 sm:py-4"
          >
            <div className="hidden sm:flex items-center justify-center flex-shrink-0">
              <GradientIcon name={stat.icon} variant="circle" />
            </div>

            <div className="flex flex-col min-w-0">
              <div className="font-bold text-xl sm:text-2xl xl:text-3xl text-white tracking-wide leading-none drop-shadow-sm">
                <CountUp from={0} to={stat.value} duration={2} separator="," />
                <span className="text-green-400 ml-1.5">+</span>
              </div>
              <div className="text-[10px] sm:text-xs xl:text-sm mt-1.5 text-white/60 font-medium tracking-wider uppercase leading-tight">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 2. RIGHT SIDE: Pure Trust / Accreditation Block (No duplicate buttons) */}
      <div className="w-full lg:w-[35%] bg-gradient-to-br from-blue-600/20 to-red-500/10 flex flex-col justify-center p-4 sm:p-5 border-t lg:border-t-0 lg:border-l border-white/10">
  <div className="flex items-center gap-2 mb-1.5">
    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
    <p className="text-[10px] font-black uppercase tracking-[2px] text-red-400">
      Urgent Boarding Needs
    </p>
  </div>
  <div className="bg-slate-950/40 border border-red-500/20 rounded-sm p-2.5">
    <p className="text-xs font-bold text-white">Chief Engineers & Master Mariners</p>
    <p className="text-[11px] text-white/60 mt-0.5 leading-snug">Immediate deployment pipeline open for oil/chemical tanker fleet lines.</p>
  </div>
</div>

    </div>
  );
}