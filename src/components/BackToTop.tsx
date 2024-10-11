import { ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

export function BackToTop() {
  return (
    <Link
      to="home"
      smooth={true}
      spy={true}
      duration={700}
      className="fixed cursor-pointer  flex items-center justify-center rounded-full w-10 h-10 bg-transparent border-2  mt-40 md:mt-20 mr-3 z-50 border-zinc-400 right-0 md:mr-28"
    >
      <ArrowUp className="w-5 h-5 text-zinc-400" />
    </Link>
  );
}
