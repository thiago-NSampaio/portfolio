import { ReactNode } from "react";
import { Element } from "react-scroll";

interface SectionProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  name: string;
}

export function Section({ children, subtitle, name, title }: SectionProps) {
  return (
    <Element className="px-4 md:px-0" name={name}>
      <h2 className="text-2xl mb-1.5 font-bold text-zinc-300">{title}</h2>
      <h3 className="text-lg mb-3">{subtitle}</h3>
      {children}
    </Element>
  );
}
