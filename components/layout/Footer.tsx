import Bottom from "./footer/Bottom";
import Middle from "./footer/Middle";
import Upper from "./footer/Upper";

export default function Footer() {
  return (
    <footer className="bg-tertiary text-white w-full">
      <div className="mx-auto max-w-7xl px-6 pt-12 md:pt-16 pb-12 lg:px-8">
        <Upper />
        <Middle />
      </div>
      <Bottom />
    </footer>
  );
}
