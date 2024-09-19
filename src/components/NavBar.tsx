import { MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export function NavBar({ isDesktop }: { isDesktop: boolean }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  function openMenu() {
    setToggleMenu(true);
  }

  // Fechar o menu quando mudar o tamanho da tela para desktop
  useEffect(() => {
    if (isDesktop) {
      setToggleMenu(false);
    }
  }, [isDesktop]);

  return (
    <>
      {/* Ícone de menu para dispositivos móveis */}
      {!isDesktop && (
        <MenuIcon
          onClick={openMenu}
          className="cursor-pointer absolute md:top-10 right-4 md:size-8 text-white"
        />
      )}

      {/* Menu de navegação */}
      <ul
        className={
          isDesktop
            ? "flex flex-row space-x-5 text-xl text-zinc-300"
            : `grid grid-cols-2 fixed top-0 py-16 w-full bg-black h-lvh text-white text-xl sm:text-2xl transition-transform duration-300 space-y-0 ${
                toggleMenu ? "translate-x-0" : "-translate-x-full"
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
              onClick={() => setToggleMenu(false)}
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
              onClick={() => setToggleMenu(false)}
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
              onClick={() => setToggleMenu(false)}
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
              onClick={() => setToggleMenu(false)}
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
              onClick={() => setToggleMenu(false)}
            >
              Contato
            </Link>
          </li>
        </div>

        {/* Ícone de fechar no canto superior direito para dispositivos móveis */}

        {!isDesktop && (
          <div className="border-t">
            <X
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer absolute top-[70px] md:size-8 right-4 text-white "
            />
          </div>
        )}
      </ul>
    </>
  );
}
