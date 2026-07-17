import Button from "@/components/ui/Button";

export default function Upper() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-12">
      <h2 className="text-2xl sm:text-4xl font-medium max-w-md tracking-tight leading-snug">
        Your Trusted Partner in Marine Solutions — Securing Excellence at Sea.
      </h2>
      <div className="block sm:hidden h-[1px] w-28 bg-background"></div>
      {/* Newsletter Form */}
      <div className="flex flex-col gap-4 w-full md:max-w-md">
        <span className="text-sm sm:text-xl font-medium tracking-wider">
          Stay Connected: Receive Company News and Career Insights
        </span>
        <form className="flex items-center justify-between border border-white/20 rounded-sm p-1 pl-4 bg-transparent focus-within:border-white/45 transition-colors">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-sm text-white placeholder-white/50 focus:outline-none"
            required
          />
          <Button variant="primary" className="shrink-0">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
