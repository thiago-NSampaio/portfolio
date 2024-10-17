import { Bootstrap } from "./icons/Bootstrap";
import { Bulma } from "./icons/Bulma";
import { CSS } from "./icons/CSS";
import { EJS } from "./icons/EJS";
import { ExpressJS } from "./icons/ExpressJS";
import { Flask } from "./icons/Flask";
import { Java } from "./icons/Java";
import { Jest } from "./icons/Jest";
import { Js } from "./icons/Js";
import { MongoDB } from "./icons/MongoDB";
import { NodeJs } from "./icons/Nodejs";
import { Python } from "./icons/Python";
import { ReactJS } from "./icons/ReactJS";
import { SpringBoot } from "./icons/SpringBoot";
import { SQLite } from "./icons/SQLite";
import { TailwindCss } from "./icons/TailwindCss";
import { TypeScript } from "./icons/TypeScript";

type IconsTechsProps = {
  tech: string;
};

export function IconsTechs({ tech }: IconsTechsProps) {
  switch (tech) {
    case "Node.js":
      return <NodeJs />;
    case "Java":
      return <Java />;
    case "Jest":
      return <Jest />;
    case "Spring Boot":
      return <SpringBoot />;
    case "JavaScript":
      return <Js />;
    case "CSS":
      return <CSS />;
    case "Bootstrap":
      return <Bootstrap />;
    case "ReactJS":
      return <ReactJS />;
    case "SQLite":
      return <SQLite />;
    case "TypeScript":
      return <TypeScript />;
    case "Python":
      return <Python />;
    case "Flask":
      return <Flask />;
    case "Express.js":
      return <ExpressJS />;
    case "MongoDB":
      return <MongoDB />;
    case "Tailwindcss":
      return <TailwindCss />;
    case "EJS":
      return <EJS />;
    case "Bulma":
      return <Bulma />;
    default:
      return "";
  }
}
