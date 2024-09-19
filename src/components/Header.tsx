import { NavBar } from "./NavBar";
import { useMediaQuery } from "react-responsive";

export function Header() {
  const isDesktop = useMediaQuery({ minWidth: 860 });

  return (
    <header
      className={`fixed border-b border-zinc-800 h-16 md:h-[116px] z-50 flex w-full items-center justify-between bg-black ${isDesktop ? "md:px-10" : ""}`}
    >
      <div className="font-bold text-xl md:text-3xl">
        <span className="bg-clip-text text-transparent flex  bg-gradient-to-r from-cyan-200 to-teal-400">
          {"< "}Thiago Nascimento{" />"}
        </span>
      </div>
      <NavBar isDesktop={isDesktop} />
    </header>
  );
}
