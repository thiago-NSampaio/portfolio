import { Section } from "./Section";
import { Profile } from "./Profile";
import { Certificates } from "./Certificates";
import { Projects } from "./Projects";
import { BackToTop } from "./BackToTop";
import { useScroll } from "../hooks/useScroll";
import { SocialMedias } from "./SocialMedias";

export function Portfolio() {
  const isScrolled = useScroll();
  return (
    <div className="items-center text-white flex flex-col">
        {isScrolled && <BackToTop />}

        <Profile />
      <div className="w-full px-3 md:max-w-[80rem] space-y-8 md:space-y-16">

        <Section
          name="about"
          title="Sobre"
          subtitle="Sou um desenvolvedor web em início de carreira, com mais de 2 anos de experiência em HTML, CSS, JavaScript e PHP. Tenho grande interesse em criar soluções web funcionais e otimizadas, sempre buscando aprender e implementar as melhores práticas do desenvolvimento front-end e back-end. Meu foco é desenvolver aplicações responsivas e dinâmicas, com atenção ao detalhe e à eficiência do código."
        >
          <p className="flex items-center justify-center">
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
          subtitle="Aqui estão alguns dos projetos que desenvolvi. Cada projeto reflete meu aprendizado e experiência como desenvolvedor web, com foco em criar soluções dinâmicas, funcionais e responsivas."
        >
          <Projects />
        </Section>
        <Section
          name="certificates"
          title="Certificados"
          subtitle="Certificações obtidas no campo de desenvolvimento web."
        >
          <Certificates />
        </Section>
        <Section
          name="contact"
          title="Contato"
          subtitle="Entre em contato comigo."
        >
          <SocialMedias />
        </Section>
      </div>
    </div>
  );
}
