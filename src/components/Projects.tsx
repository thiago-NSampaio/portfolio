import { Github, RocketIcon } from "lucide-react";
import { api } from "../lib/axios";
import { useEffect, useState } from "react";
import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";
import { IconsTechs } from "./IconsTechs";

type tech = {
  name: string;
  color: string;
};

interface Project {
  id: string;
  name: string;
  description: string;
  img: string;
  github: string;
  deploy: string;
  techs: tech[];
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  console.log(projects);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <Row speed={5000}>
      {projects.map((project) => (
        <SwiperSlide
          key={project.id}
          className="flex w-full max-w-sm overflow-hidden overflow-x-auto"
        >
          <div className="px-3 py-2 flex flex-col bg-gradient-to-r items-center from-neutral-800 to-neutral-900  max-w-sm rounded-xl overflow-hidden h-[520px]">
            <div className="flex justify-between mt-2 font-bold">
              <h3 className="text-xl text-start">{project.name}</h3>
            </div>
            <p className="font-normal text-md mb-2">{project.description} </p>
            <div className="relative group w-full">
              <img
                alt="notes"
                src={project.img}
                className="rounded-md object-cover w-full h-full object-top cursor-grab transition-opacity duration-300 bg-zinc-900 group-hover:opacity-50"
                draggable={false}
              />
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-black flex items-center justify-center rounded-full cursor-pointer hover:bg-lime-500"
                >
                  <RocketIcon className="text-white size-7" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-black flex items-center justify-center rounded-full cursor-pointer hover:bg-purple-500"
                >
                  <Github className="text-white size-7" />
                </a>
              </div>
            </div>

            <div className="flex py-2">
              <ul className="flex flex-wrap gap-y-2 gap-1.5 *:text-center *:px-2.5 *:text-sm *:md:text-base md:*:px-3.5 *:py-1  *:rounded-xl">
                {project.techs.map((tech) => {
                  return (
                    <li
                      key={tech.name}
                      className="flex gap-x-1.5 hover:shadow-md bg-zinc-950 border hover:cursor-default"
                      style={{ borderColor: tech.color ? tech.color : "white" }}
                    >
                      {<IconsTechs tech={tech.name} />}
                      {tech.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Row>
  );
}
