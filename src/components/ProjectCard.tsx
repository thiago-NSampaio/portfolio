import { Github, RocketIcon } from "lucide-react";
import { IconsTechs } from "./IconsTechs";
import { tech } from "../types/Project";

interface ProjectCardProps {
  name: string;
  description: string;
  img: string;
  github: string;
  deploy: string;
  techs: tech[];
}

export function ProjectCard({
  name,
  description,
  img,
  github,
  deploy,
  techs,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-gradient-to-r items-center from-neutral-800 to-neutral-900 border border-zinc-500  max-w-sm rounded-xl overflow-hidden h-[29.5rem] md:h-[520px]">
      <div className="flex-1 px-3 py-2">
        <div className="flex justify-center font-bold">
          <h3 className="text-xl text-center px-3 bg-neutral-700 border border-zinc-500 rounded-full">
            {name}
          </h3>
        </div>
        <p className="font-normal text-md mt-2 mb-2">{description}</p>
        <div className="relative group w-full">
          <img
            alt={name}
            src={img}
            className="rounded-md object-cover w-full h-full object-top cursor-grab transition-opacity duration-300 bg-zinc-900 group-hover:opacity-50"
            draggable={false}
          />
        </div>
        <div className="flex py-2">
          <ul className="flex flex-wrap gap-y-2 gap-1.5 *:text-center *:px-2.5 *:text-sm *:md:text-sm md:*:px-3.5 *:py-1 *:rounded-xl">
            {techs.map((tech) => (
              <li
                key={tech.name}
                className="flex gap-x-1.5 justify-center items-center hover:shadow-md bg-zinc-950 border hover:cursor-default"
                style={{ borderColor: tech.color ? tech.color : "white" }}
              >
                <IconsTechs tech={tech.name} />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-1 border-t border-zinc-500 w-full transition-opacity duration-300">
        <a
          href={deploy}
          target="_blank"
          aria-label="ver em produção"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-transparent flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer"
        >
          <RocketIcon className="text-white size-6 " />
        </a>

        <a
          href={github}
          target="_blank"
          aria-label="ver repositório"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-transparent flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer"
        >
          <Github className="text-white size-6 " />
        </a>
      </div>
    </div>
  );
}
