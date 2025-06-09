import { Github, Linkedin } from "lucide-react";
import { getSaudation } from "../utils/getSaudation";
import { Element } from "react-scroll";

export function Profile() {
  const saudation = getSaudation();
  return (
    <Element
      className="bg-opacity-95 w-full h-full bg-gradient-to-b from-zinc-900 to-zinc-950"
      name="home"
    >
      <div className="flex flex-col space-y-7 justify-center items-center top-50 h-full min-h-[42rem] mt-7 md:flex-row md:gap-3 md:space-y-0 md:min-h-[32rem]">
        <img
          className="flex flex-shrink-0 size-60 md:size-64 rounded-full border-4 p-1 border-orange-500"
          // src="./profile.png"
          alt=""
        />
        <div className="m-0 p-0 items-center justify-content-center">
          <p className="flex flex-wrap justify-center text-4xl md:block font-bold md:text-5xl">
            {saudation}, sou{" "}
            <span className="text-orange-500 ml-1.5 md:ml-0">
              Thiago<span className="text-white">, </span>
            </span>
            <br className="hidden md:block" />
            desenvolvedor web.
          </p>

          <div className="flex justify-center py-4 space-x-5 items-center">
            <a
              href="http://linkedin.com/in/thiago-nascimentos/"
              className="mobile-border-snake flex gap-2 rounded-lg px-6 py-2 text-zinc-500 text-lg hover:text-blue-300 md:border-2 md:border-zinc-500 md:px-5 md:py-3 md:text-xl md:gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-6" />
              Linkedin
            </a>

            <a
              href="http://github.com/thiago-NSampaio/"
              className="mobile-border-snake flex gap-2 rounded-lg px-6 py-2 text-zinc-500 text-lg hover:text-white md:border-2 md:border-zinc-500 md:px-5 md:py-3 md:text-xl md:gap-2"
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
