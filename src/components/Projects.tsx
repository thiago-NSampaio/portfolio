import { Github, RocketIcon } from "lucide-react";
import { api } from "../lib/axiox";
import { useEffect, useState } from "react";
import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";

interface Project {
  id: string;
  name: string;
  description: string;
  img: string;
  github: string;
  deploy: string;
  techs: string[];
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api
      .get("/projects")
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  console.log(projects);

  return (
    <Row>
      {projects.map((project) => (
        <SwiperSlide
          key={project.id}
          className="flex w-full md:max-w-sm gap-x-6 overflow-hidden overflow-x-auto"
        >
          <div className="px-3 py-2 flex flex-col bg-gradient-to-r items-center from-neutral-800 to-neutral-900 h-[560px] max-w-sm rounded-xl overflow-hidden">
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
              <ul className="flex flex-wrap gap-y-2 gap-1.5 *:bg-black *:text-center *:px-3.5 *:py-1 *:border *:border-zinc-950 *:rounded-xl">
                {project.techs.map((tech) => {
                  return (
                    <li
                      key={tech}
                      className="hover:shadow-md hover:shadow-teal-100 hover:cursor-default"
                    >
                      {tech}
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
