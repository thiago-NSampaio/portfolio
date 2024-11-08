import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { useMediaQuery } from "react-responsive";

export function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <header
      className={`fixed border-b border-zinc-500 h-16 md:h-24 z-50 flex w-full items-center justify-between bg-black`}
    >
      {/* <div className="flex-1 w-full h-full"> */}
      <Logo />
      {/* </div> */}
      <NavBar isDesktop={isDesktop} />
    </header>
  );
}
