import CountUp from "../animations/CountUp";
import GradientIcon from "../ui/GradientIcon";

export default function StatsCard() {
  return (
    <div className="absolute bottom-30 left-1/2 -translate-x-1/2 translate-y-1/2 w-[calc(100%-2rem)] max-w-7xl z-5 px-4">
      <div className="hidden min-[840px]:flex flex-row w-full py-8 rounded-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Stat Item 1 */}
        <div className="bg-white min-w-0 flex items-center justify-center text-left gap-[14px] flex-1 p-6 md:p-0 border-b md:border-b-0 md:border-l border-blue-500/20 first:border-l-0">
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center flex-shrink-0">
            <GradientIcon name="vessel" variant="circle" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <div className="mt-0 font-extrabold text-4xl text-[var(--tertiary)] tracking-[0.2px]">
              <CountUp from={0} to={30} duration={2} separator="," />
              <span className="text-tertiary ml-1">+</span>
            </div>
            <div className="text-xs md:text-sm leading-tight text-blue-900/95 font-medium max-w-[20ch] break-words">
              Vessels Managed
            </div>
          </div>
        </div>

        {/* Stat Item 2 */}
        <div className="bg-white min-w-0 flex items-center justify-center text-left gap-[14px] flex-1 p-6 md:p-0 border-b md:border-b-0 md:border-l border-blue-500/20">
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center flex-shrink-0">
            <GradientIcon name="people" variant="circle" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <div className="mt-0 font-extrabold text-4xl text-[var(--tertiary)] tracking-[0.2px]">
              <CountUp from={0} to={420} duration={2} separator="," />
              <span className="text-tertiary ml-1">+</span>
            </div>
            <div className="text-xs md:text-sm leading-tight text-blue-900/95 font-medium max-w-[20ch] break-words">
              Deployed Seafarers
            </div>
          </div>
        </div>

        {/* Stat Item 3 */}
        <div className="bg-white min-w-0 flex items-center justify-center text-left gap-[14px] flex-1 p-6 md:p-0 md:border-l border-blue-500/20">
          <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center flex-shrink-0">
            <GradientIcon name="training" variant="circle" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <div className="mt-0 font-extrabold text-4xl text-[var(--tertiary)] tracking-[0.2px]">
              <CountUp from={0} to={100} duration={2} separator="," />
              <span className="text-tertiary ml-1">+</span>
            </div>
            <div className="text-xs md:text-sm leading-tight text-blue-900/95 font-medium max-w-[20ch] break-words">
              Monthly Trainees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
