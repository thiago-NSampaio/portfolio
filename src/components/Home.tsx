import { Section } from "./Section";
import { ItemsRow } from "./ItemsRow";
import { Row } from "./Row";
import { Profile } from "./Profile";
import { InstagramLogo } from "phosphor-react";

export function Home() {
  return (
    <div className="items-center text-white flex flex-col px-4 bg-opacity-55 w-dvw h-full">
      <Section name="home" subtitle="" title="">
        <Profile />
      </Section>
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
        <Row arr={[0, 1, 2]}>
          <ItemsRow />
        </Row>
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
        <div className="flex items-center justify-center space-x-3">
          <InstagramLogo className="size-16" />
        </div>
      </Section>
    </div>
  );
}
