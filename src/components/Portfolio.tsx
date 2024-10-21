import { Section } from "./Section";

import { Profile } from "./Profile";
import { InstagramLogo } from "phosphor-react";
import { Certificates } from "./Certificates";
import { Projects } from "./Projects";
import { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import { BackToTop } from "./BackToTop";

export function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="items-center text-white flex flex-col">
      <Profile />

      <div className="w-full px-3 h-full md:max-w-[1260px]">
        {isScrolled && <BackToTop />}

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
          subtitle="Estes são os certificados que adquirem no meio tecnlógico de desenvolvimento para web."
        >
          <Certificates />
        </Section>
        <Section
          name="contact"
          title="Contato"
          subtitle="Entre em contato comigo."
        >
          <div className="flex items-center justify-center pt-3 -mb-7 space-x-5">
            <InstagramLogo className="size-10" />
            <Mail className="size-10" />
            <Phone className="size-10" />
          </div>
        </Section>
      </div>
    </div>
  );
}
