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
          className="cursor-pointer absolute md:top-10 right-4 md:size-8 text-white"
        />
      )}

      <ul
        className={
          isDesktop
            ? "flex flex-row space-x-5 text-xl text-zinc-300"
            : `${
                isMenuOpen
                  ? "transition-transform grid grid-cols-2 fixed top-0 py-16 w-full bg-black h-lvh text-white text-xl sm:text-2xl duration-300 space-y-0 translate-x-0"
                  : "hidden"
              }`
        }
      >
        <div
          className={
            isDesktop ? "space-y-0 inline-flex" : "space-y-5 border-t px-3"
          }
        >
          {/* Links do menu */}
          <li className="p-2 transition ease-in-out hover:-translate-y-1 duration-300">
            <Link
              to="home"
              className="home"
              activeClass="text-teal-400 shadow-lg"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="p-2 transition ease-in-out hover:-translate-y-1 duration-300">
            <Link
              to="about"
              className="about"
              activeClass="text-teal-400 shadow-lg"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Sobre
            </Link>
          </li>
          <li className="p-2 transition ease-in-out hover:-translate-y-1 duration-300">
            <Link
              to="projects"
              className="projects"
              activeClass="text-teal-400 shadow-lg"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Projetos
            </Link>
          </li>
          <li className="p-2 transition ease-in-out hover:-translate-y-1 duration-300">
            <Link
              to="certificates"
              className="certificates"
              activeClass="text-teal-400 shadow-lg"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Certificados
            </Link>
          </li>
          <li className="p-2 transition ease-in-out hover:-translate-y-1 duration-300">
            <Link
              to="contact"
              className="contact"
              activeClass="text-teal-400 shadow-lg"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              Contato
            </Link>
          </li>
        </div>

        {/* Ícone de fechar no canto superior direito para dispositivos móveis */}
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
