import { Section } from "./Section";

import { Profile } from "./Profile";
import { InstagramLogo } from "phosphor-react";
import { Certificate } from "./Certificate";
import { Projects } from "./Projects";
import { Row } from "./Row";

export function Home() {
  return (
    <div className="items-center  text-white flex flex-col">
      <Profile />
      <div className="w-full max-w-7xl">
        <Section
          name="about"
          title="Sobre"
          subtitle=" Sou um desenvolvedor web em início de carreira com forte interesse
            em programação para web. Tenho 1 ano e 6 meses de experiência em
            desenvolvimento front-end, com foco em HTML, CSS, JavaScript e PHP."
        >
          <p className="items-center py-2 px-2">
            <a href="https://skillicons.dev">
              <img
                className="cursor-default"
                src="https://skillicons.dev/icons?i=html,css,js,ts,react,php,nodejs,git,py,java"
              />
            </a>
          </p>
        </Section>
        <Section
          name="projects"
          title="Projetos"
          subtitle="Confira os projetos que desenvolvi que estão em produção."
        >
          <Row>
            <Projects />
          </Row>
        </Section>
        <Section
          name="certificates"
          title="Certificados"
          subtitle="Estes são os certificados que adquirem no meio tecnlógico de desenvolvimento para web."
        >
          <Certificate />
        </Section>
        <Section
          name="contact"
          title="Contato"
          subtitle="Entre em contato comigo."
        >
          <div className="flex items-center justify-center space-x-3">
            <InstagramLogo className="size-16" />
          </div>
        </Section>
      </div>
    </div>
  );
}
