import { X } from "lucide-react";
import { Link } from "react-scroll";

interface NavLinksProps {
  isDesktop: boolean;
  closeMenu: () => void;
  isMenuOpen: boolean;
}

export function NavLinks({ closeMenu, isDesktop, isMenuOpen }: NavLinksProps) {
  return (
    <ul
      className={
        isDesktop
          ? "flex flex-row space-x-5 text-lg text-zinc-300"
          : `${
              isMenuOpen
                ? "transition-transform fixed top-0 py-16 w-full h-lvh bg-black text-white text-xl sm:text-2xl duration-300 transform translate-x-0 opacity-100"
                : "fixed top-0 py-16 w-full h-lvh bg-black z-50 text-white text-xl sm:text-2xl duration-300 transform -translate-x-full opacity-0 pointer-events-none"
            }`
      }
    >
      <div
        className={
          isDesktop
            ? "space-y-0 inline-flex *:hover:cursor-pointer"
            : "flex border-t flex-col space-y-5 px-3 *:hover:cursor-pointer"
        }
      >
        <Link
          to="home"
          className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
          activeClass="text-orange-400"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          offset={isDesktop ? -100 : -70}
        >
          Home
        </Link>

        <Link
          to="about"
          className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
          activeClass="text-orange-400"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          offset={isDesktop ? -100 : -70}
        >
          Sobre
        </Link>

        <Link
          to="projects"
          className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
          activeClass="text-orange-400"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          offset={isDesktop ? -100 : -70}
        >
          Projetos
        </Link>

        <Link
          to="certificates"
          className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
          activeClass="text-orange-400"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          offset={isDesktop ? -100 : -70}
        >
          Certificados
        </Link>

        <Link
          to="contact"
          className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
          activeClass="text-orange-400"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMenu}
          offset={isDesktop ? -100 : -70}
        >
          Contato
        </Link>
      </div>

      {!isDesktop && (
        <div className="absolute top-[70px] right-4">
          <X
            onClick={closeMenu}
            className="cursor-pointer md:size-8 text-white"
          />
        </div>
      )}
    </ul>
  );
}
