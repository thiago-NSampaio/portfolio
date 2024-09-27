import { NavBar } from "./NavBar";
import { useMediaQuery } from "react-responsive";

export function Header() {
  const isDesktop = useMediaQuery({ minWidth: 860 });

  return (
    <header
      className={`fixed border-b border-zinc-500 h-16 md:h-[116px] z-50 flex w-full items-center justify-between bg-zinc-950 ${isDesktop ? "md:px-10" : ""}`}
    >
      <div
        className="font-bold text-xl md:text-3xl"
        style={{
          animation: `shadowMove 1s ease-in-out infinite`,
          animationDirection: "alternate-reverse",
        }}
      >
        <span className="flex bg-transparent">
          {[
            "<",
            "T",
            "h",
            "i",
            "a",
            "g",
            "o",
            "",
            "N",
            "a",
            "s",
            "c",
            "i",
            "m",
            "e",
            "n",
            "t",
            "o",
            "/>",
          ].map((char, index) => (
            <span
              key={index}
              className="inline-block text-white tracking-wide md:tracking-[0.3rem]"
              style={{
                animation: `shadowMove 3s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
                letterSpacing: "-0.50em md:-0.12em",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>
      <NavBar isDesktop={isDesktop} />
    </header>
  );
}
