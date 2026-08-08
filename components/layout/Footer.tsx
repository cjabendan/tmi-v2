import Bottom from "./footer/Bottom";
import Middle from "./footer/Middle";
import Upper from "./footer/Upper";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white w-full">
      <div className="px-5 sm:px-14 pb-12 pt-12 md:pt-16  ">
        <Upper />
        <Middle />
      </div>
      <Bottom />
    </footer>
  );
}
