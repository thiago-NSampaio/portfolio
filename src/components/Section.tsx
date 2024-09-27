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
    <Element className="mb-16 px-6" name={name}>
      <h2 className="text-2xl font-bold text-zinc-400">{title}</h2>
      <h3 className="text-lg">{subtitle}</h3>
      {children}
    </Element>
  );
}
