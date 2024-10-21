import { api } from "../lib/axios";
import { useEffect, useState } from "react";
import { Row } from "./Row";
import { SwiperSlide } from "swiper/react";
import { Project } from "../types/Project";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

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
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Row>
  );
}
