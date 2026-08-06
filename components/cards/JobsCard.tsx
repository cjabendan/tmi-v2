// components/cards/InNeedJobsCard.tsx
"use client";

import React, { useState } from "react";
import { Flame, ChevronRight, Anchor, Clock } from "lucide-react";

interface JobOpening {
  id: string;
  rank: string;
  vesselType: string;
  salary: string;
  urgency: "Immediate" | "Next Batch" | "High Need";
  department: "Deck" | "Engine" | "Ratings";
}

const URGENT_JOBS: JobOpening[] = [
  {
    id: "1",
    rank: "Chief Engineer",
    vesselType: "Oil/Chemical Tanker",
    salary: "$8,500 - $10,500/mo",
    urgency: "Immediate",
    department: "Engine",
  },
  {
    id: "2",
    rank: "Master Mariner / Captain",
    vesselType: "Container Vessel",
    salary: "$9,000 - $11,000/mo",
    urgency: "Immediate",
    department: "Deck",
  },
  {
    id: "3",
    rank: "2nd Officer",
    vesselType: "Bulk Carrier",
    salary: "$4,200 - $5,000/mo",
    urgency: "Next Batch",
    department: "Deck",
  },
  {
    id: "4",
    rank: "Able Seaman (AB)",
    vesselType: "General Cargo",
    salary: "$1,800 - $2,200/mo",
    urgency: "High Need",
    department: "Ratings",
  },
];

export default function JobsCard() {
  const [activeTab, setActiveTab] = useState<"All" | "Deck" | "Engine">("All");

  const filteredJobs =
    activeTab === "All"
      ? URGENT_JOBS
      : URGENT_JOBS.filter((job) => job.department === activeTab);

  return (
    // 1. Added explicit width and expanded padding
    <div className="w-full max-w-xl lg:max-w-2xl rounded-2xl bg-slate-700/10 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] px-6 py-2">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              In-Demand Boarding Slots
            </h3>
            <p className="text-xs text-white/60">
              Immediate deployment & agency pooling
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
          {(["All", "Deck", "Engine"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                activeTab === tab
                  ? "bg-red-500 text-white shadow-md shadow-red-500/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs List - 2. Expanded height from 220px to 320px & increased slot padding */}
      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1 no-scrollbar">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/50 hover:bg-slate-800/60 border border-white/10 hover:border-red-500/40 transition-all cursor-pointer"
          >
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                  {job.rank}
                </span>
                {job.urgency === "Immediate" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-500/10 border border-red-500/30 text-[10px] font-extrabold text-red-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                    Urgent
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-white/40" />
                  {job.vesselType}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">
                  {job.salary}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-red-500 hover:text-white text-white text-xs font-bold transition-all shadow-sm"
              >
                Apply
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Card Footer */}
      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-white/50">
          <Clock className="w-4 h-4 text-red-400" />
          <span>Updated daily by partner manning agencies</span>
        </div>
        <a
          href="/jobs"
          className="text-red-400 font-bold hover:underline flex items-center gap-1"
        >
          View All Openings ({URGENT_JOBS.length}+)
        </a>
      </div>
    </div>
  );
}