

function Hero() {
  return (
    <section className="w-full relative overflow-visible mx-auto">
      <div
        className="absolute top-0 left-0 w-full h-[90vh] bg-cover bg-[position:55%_center] md:bg-right-center bg-no-repeat z-1  sm:rounded-lg"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 86, 177, 0.9) 0%, rgba(0, 86, 177, 0.4) 50%, rgba(0, 131, 31, 0.45) 100%), url('/assets/image/background/hero-bg.png')`,
        }}
      />
      <div className="relative z-2 w-full h-[90vh] flex flex-col justify-end p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
          <div className="flex flex-col justify-end gap-4">
            <span className="w-fit self-start text-xs sm:text-base font-medium tracking-[2.5px] text-white rounded-full bg-slate-700/10 backdrop-blur-md border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] px-6 py-2">
              Empowering Future Seafarers
            </span>

            <h1 className="max-w-[820px] text-3xl md:text-5xl lg:text-7xl leading-[1.1] font-semibold tracking-[2px] text-white uppercase drop-shadow-2xl">
              Dedicated provider of quality maritime solutions
            </h1>
          </div>
          <div className="w-full lg:w-auto flex justify-end">
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
