import React from 'react'

export default function StatsCard() {
  return (
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[calc(100%-2rem)] max-w-7xl z-5 px-4">
        <div className="hidden sm:flex flex-row w-full h-40 rounded-lg bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
          {/* Stat Item 1 */}
          <div className="bg-white min-w-0 flex items-center justify-center text-left gap-[14px] flex-1 p-6 md:p-0 border-b md:border-b-0 md:border-l border-blue-500/20 first:border-l-0">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center flex-shrink-0">
              {/* <VesselIcon width="60" height="60" aria-hidden="true" focusable="false" /> */}
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="mt-0 font-extrabold text-2xl md:text-3xl lg:text-4xl text-[var(--tertiary)] tracking-[0.2px] pb-1.5">
                {/* <CountUp from={0} to={600} duration={2} separator="," /> */}
                <span className="text-blue-500 ml-1">+</span>
              </div>
              <div className="text-xs md:text-sm leading-tight text-blue-900/95 font-medium max-w-[20ch] break-words">
                Vessels Managed
              </div>
            </div>
          </div>

          {/* Stat Item 2 */}
          <div className="bg-white min-w-0 flex items-center justify-center text-left gap-[14px] flex-1 p-6 md:p-0 border-b md:border-b-0 md:border-l border-blue-500/20">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center flex-shrink-0">
              {/* <PeopleIcon width="60" height="60" aria-hidden="true" focusable="false" /> */}
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="mt-0 font-extrabold text-2xl md:text-3xl lg:text-4xl text-[var(--tertiary)] tracking-[0.2px] pb-1.5">
                {/* <CountUp from={0} to={8200} duration={2} separator="," /> */}
                <span className="text-blue-500 ml-1">+</span>
              </div>
              <div className="text-xs md:text-sm leading-tight text-blue-900/95 font-medium max-w-[20ch] break-words">
                Deployed Seafarers
              </div>
            </div>
          </div>

          {/* Stat Item 3 */}
          <div className="bg-white min-w-0 flex items-center justify-center text-left gap-[14px] flex-1 p-6 md:p-0 md:border-l border-blue-500/20">
            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center flex-shrink-0">
              {/* <TrainingIcon width="60" height="60" aria-hidden="true" focusable="false" /> */}
            </div>
            <div className="flex flex-col gap-1.5 min-w-0">
              <div className="mt-0 font-extrabold text-2xl md:text-3xl lg:text-4xl text-[var(--tertiary)] tracking-[0.2px] pb-1.5">
                {/* <CountUp from={0} to={1500} duration={2} separator="," /> */}
                <span className="text-blue-500 ml-1">+</span>
              </div>
              <div className="text-xs md:text-sm leading-tight text-blue-900/95 font-medium max-w-[20ch] break-words">
                Monthly Trainees
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
