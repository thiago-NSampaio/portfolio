import { Github, User } from "lucide-react";
import { Section } from "./Section";
import { getSaudation } from "../utils/getSaudation";
import { ProjectRow } from "./projectsRow";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
export function Home() {
  const saudation = getSaudation();

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <div className="relative top-64 items-center text-white flex flex-col px-4 bg-opacity-55 w-dvw h-full">
      <div className="space-y-16 max-w-6xl flex flex-col ">
        <Section name="home" subtitle="" title="">
          <div className="flex justify-center items-center">
            <img
              className="flex flex-shrink-0 h-28 rounded-full border-4 p-1 border-teal-400 md:w-54 md:h-48"
              src="./profile.png"
              alt=""
            />
            <div className="px-6">
              <p className="text-4xl text-justify font-bold">
                {saudation}, sou <span className="text-teal-500">Thiago</span>,
                <br />
                desenvolvedor web.
              </p>
              <div className="flex py-3 space-x-5 ml-5 items-center">
                <button className="flex gap-2 rounded-md border-2 px-6 py-2 border-zinc-500 text-zinc-500 text-lg hover:text-blue-300 hover:border-blue-500">
                  <User className="size-6" />
                  Linkedin
                </button>
                <button className="flex gap-2 rounded-md border-2 px-6 py-2 border-zinc-500 text-zinc-500 text-lg hover:text-white hover:border-white">
                  <Github className="size-6" />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </Section>
        <Section
          name="about"
          title="Sobre"
          subtitle=" Sou um desenvolvedor web em início de carreira com forte interesse
            em programação para web. Tenho 1 ano e 6 meses de experiência em
            desenvolvimento front-end, com foco em HTML, CSS, JavaScript e PHP."
        >
          <p className="items-center py-2 px-2">
            <a href="https://skillicons.dev" className="cursor-default">
              <img src="https://skillicons.dev/icons?i=html,js,css,react,php,nodejs,git,py,java" />
            </a>
          </p>
        </Section>
        <Section
          name="projects"
          title="Projetos"
          subtitle="Confira os projetos que desenvolvi que estão em produção."
        >
         <div className="pt-4 px-4 flex overflow-x-auto scrollbar-hide "  {...events} ref={ref}>
  {[0, 1, 2, 3, 4].map((project) => (
    <div className="inline-flex flex-shrink-0 " key={project}>
      <ProjectRow />
    </div>
  ))}
</div>

        </Section>
        <Section
          name="certificates"
          title="Certificados"
          subtitle="Estes são os certificados que adquirem no meio tecnlógico de desenvolvimento para web."
        >
          <p className="items-center py-2 px-2">
            <img className="w-40 h-36" src="profile-pic.png" alt="" />
          </p>
        </Section>
        <Section
          name="contact"
          title="Contato"
          subtitle="Entre em contato comigo."
        >
          <p className="items-center py-2 px-2">
            <img className="w-40 h-36" src="profile-pic.png" alt="" />
          </p>
        </Section>
      </div>
    </div>
  );
}
