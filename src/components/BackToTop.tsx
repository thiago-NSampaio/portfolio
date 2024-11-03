import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

export function BackToTop() {
  return (
    <Link
      to="home"
      smooth={true}
      spy={true}
      duration={700}
      title="início"
      className="fixed cursor-pointer flex items-center justify-center rounded-full w-10 h-10 bg-transparent border-2 z-50 border-zinc-400 bottom-60 md:bottom-[175px] right-2 md:mr-28 hover:border-zinc-300 group transition-all duration-300"
    >
      <ArrowUp className="w-5 h-5 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300" />
    </Link>
  );
}
