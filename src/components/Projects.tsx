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
        <SwiperSlide key={project.id} className="flex max-w-md overflow-hidden">
          <div className="px-3 py-2 flex flex-col bg-gradient-to-r items-center from-neutral-900 to-neutral-800 h-[520px] max-w-sm rounded-xl overflow-hidden">
            <div className="flex justify-between mt-2 font-bold">
              <h3 className="text-xl text-start">{project.name}</h3>
            </div>
            <p className="font-normal text-md mb-2">{project.description} </p>
            <div className="relative group w-full">
              <img
                alt="notes"
                src={project.img}
                className="rounded-md object-cover w-full object-top cursor-grab transition-opacity duration-300 group-hover:opacity-50"
                draggable={false}
              />
              <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-14 h-14 bg-black flex items-center justify-center rounded-full cursor-pointer hover:bg-lime-600">
                  <RocketIcon className="text-white size-7" />
                </div>
                <div className="w-14 h-14 bg-black flex items-center justify-center rounded-full cursor-pointer hover:bg-purple-500">
                  <Github className="text-white size-7" />
                </div>
              </div>
            </div>

            <div className="flex py-2 ">
              <ul className="flex flex-wrap gap-y-2 gap-2 *:bg-black *:text-center *:px-5 *:py-1 *:border *:border-zinc-950 *:rounded-xl">
                <li className="hover:shadow-md hover:shadow-teal-100">
                  NodeJs
                </li>
                <li className="hover:shadow-md hover:shadow-teal-100">
                  Styled Componentes
                </li>
                <li className="hover:shadow-md hover:shadow-teal-100">
                  Express
                </li>
                <li className="hover:shadow-md hover:shadow-teal-100">
                  jabasdfas
                </li>
                <li className="hover:shadow-md hover:shadow-teal-100">
                  axiosdasda
                </li>
                <li className="hover:shadow-md hover:shadow-teal-100">HTML</li>
                <li className="hover:shadow-md hover:shadow-teal-100">
                  tailwindcss
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Row>
  );
}
