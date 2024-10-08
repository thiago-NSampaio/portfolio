import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export function NavBar({ isDesktop }: { isDesktop: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isDesktop]);

  return (
    <>
      {!isDesktop && (
        <MenuIcon
          onClick={openMenu}
          className="cursor-pointer absolute md:top-8 right-4 md:size-8 text-white"
        />
      )}

      <ul
        className={
          isDesktop
            ? "flex flex-row space-x-5 text-lg text-zinc-300"
            : `${
                isMenuOpen
                  ? "transition-transform grid grid-cols-2 fixed top-0 py-16 w-full bg-black h-lvh text-white text-xl sm:text-2xl duration-300 space-y-0 translate-x-0"
                  : "invisible"
              }`
        }
      >
        <div
          className={
            isDesktop
              ? "space-y-0 inline-flex *:hover:cursor-pointer"
              : "flex flex-col space-y-5 border-t px-3 *:hover:cursor-pointer"
          }
        >
          <Link
            to="home"
            className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
            activeClass="text-teal-400 shadow-lg"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            offset={-116}
          >
            Home
          </Link>

          <Link
            to="about"
            className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
            activeClass="text-teal-400 shadow-lg"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            offset={-116}
          >
            Sobre
          </Link>

          <Link
            to="projects"
            className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
            activeClass="text-teal-400 shadow-lg"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            offset={-116}
          >
            Projetos
          </Link>

          <Link
            to="certificates"
            className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
            activeClass="text-teal-400 shadow-lg"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            offset={-116}
          >
            Certificados
          </Link>

          <Link
            to="contact"
            className="p-2 transition ease-in-out hover:-translate-y-1 duration-300"
            activeClass="text-teal-400 shadow-lg"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
            offset={-116}
          >
            Contato
          </Link>
        </div>

        {!isDesktop && (
          <div className="border-t">
            <X
              onClick={closeMenu}
              className="cursor-pointer absolute top-[70px] md:size-8 right-4 text-white "
            />
          </div>
        )}
      </ul>
    </>
  );
}
