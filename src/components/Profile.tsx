import { Github, Linkedin } from "lucide-react";
import { getSaudation } from "../utils/getSaudation";
import { Element } from "react-scroll";

export function Profile() {
  const saudation = getSaudation();
  return (
    <Element
      className="mb-16 bg-opacity-95 w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950"
      name="home"
    >
      <div className="flex flex-col mt-36 md:mt-64 justify-center items-center md:flex-row ">
        <img
          className="flex flex-shrink-0 size-52 rounded-full border-4 p-1 border-teal-400"
          src="./profile.png"
          alt=""
        />
        <div className="py-5 md:px-6 md:py-0">
          <p className="text-3xl text-justify font-bold md:text-4xl">
            {saudation}, sou <span className="text-teal-500">Thiago</span>,
            <br />
            desenvolvedor web.
          </p>
          <div className="flex py-8 space-x-5 md:ml-5 items-center">
            <a
              href="http://linkedin.com/in/thiago-nascimentos/"
              className="flex gap-2 rounded-md border-2 px-6 py-2 border-zinc-500 text-zinc-500 text-lg hover:text-blue-300 hover:border-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-6" />
              Linkedin
            </a>

            <a
              href="http://github.com/thiago-NSampaio/"
              className="flex gap-2 rounded-md border-2 px-6 py-2 border-zinc-500 text-zinc-500 text-lg hover:text-white hover:border-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-6" />
              Github
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}
