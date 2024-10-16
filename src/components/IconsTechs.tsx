import { CSS } from "./icons/CSS";
import { Java } from "./icons/Java";
import { Jest } from "./icons/Jest";
import { Js } from "./icons/Js";
import { MongoDB } from "./icons/MongoDB";
import { NodeJs } from "./icons/Nodejs";
import { Python } from "./icons/Python";
import { ReactJS } from "./icons/ReactJS";
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
    // case "Spring Boot":
    //   return <Spring />;
    // case "boot":
    //   return <Boot />;
    // case "jdbc":
    //   return <Jdbc />;
    // case "h2":
    //   return <H2 />;
    case "JavaScript":
      return <Js />;
    case "CSS":
      return <CSS />;
    // case "Bootstrap":
    //   return <Bootstrap />;
    case "ReactJS":
      return <ReactJS />;
    // case "Next.js":
    //   return <NextJs />;
    // case "Knex.js":
    //   return <KnexJs />;
    // case "styledcomponents":
    //   return <StyledComponents />;
    // case "axios":
    //   return <Axios />;
    case "SQLite":
      return <SQLite />;
    case "TypeScript":
      return <TypeScript />;
    case "Python":
      return <Python />;
    // case "sqlalchemy":
    //   return <SqlAlchemy />;
    // case "flask":
    //   return <Flask />;
    // case "modelsai":
    //   return <ModelsAi />;
    // case "expressjs":
    //   return <ExpressJs />;
    case "MongoDB":
      return <MongoDB />;
    case "Tailwindcss":
      return <TailwindCss />;
    // case "ejs":
    //   return <Ejs />;
    // case "bulma":
    //   return <Bulma />;
    default:
      return "";
  }
}
