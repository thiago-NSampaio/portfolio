import { Link, animateScroll as scroll } from "react-scroll";

export function NavBar() {
  return (
    <ul className="flex flex-row space-x-5 text-lg text-zinc-300">
      <li className="p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <Link
          to="home"
          className="home"
          activeClass="text-teal-400"
          spy={true}
          smooth={true}
          duration={500}
        >
          <a onClick={() => scroll.scrollTo(300)}>Home</a>
        </Link>
      </li>
      <li className="p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <Link
          to="about"
          className="about"
          activeClass="text-teal-400"
          spy={true}
          smooth={true}
          duration={500}
        >
          Sobre
        </Link>
      </li>
      <li className="p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <Link
          to="projects"
          className="projects"
          activeClass="text-teal-400"
          spy={true}
          smooth={true}
          duration={500}
        >
          Projetos
        </Link>
      </li>
      <li className="p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <Link
          to="certificates"
          className="certificates"
          activeClass="text-teal-400"
          spy={true}
          smooth={true}
          duration={500}
        >
          Certificados
        </Link>
      </li>
      <li className="p-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <Link
          to="contact"
          className="contact"
          activeClass="text-teal-400"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contato
        </Link>
      </li>
    </ul>
  );
}
