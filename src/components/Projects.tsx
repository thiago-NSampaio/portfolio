import { Github, RocketIcon } from "lucide-react";

export function Projects() {
  return (
    <div className="px-3 py-4 flex flex-col bg-gradient-to-r from-zinc-900 to-zinc-800 h-[540px] max-w-[380px] rounded-xl overflow-hidden">
      <div className="flex justify-between mt-2 font-bold">
        <h3 className="text-xl">Notes</h3>
        <div className="flex space-x-5">
          <a href="">
            <RocketIcon className="size-7" />
          </a>
          <a href="">
            <Github className="size-7" />
          </a>
        </div>
      </div>
      <p className="font-normal text-md mb-2">
        Aplicação para gerenciar links úteis
      </p>

      <img
        alt="notes"
        src="./projects/notes.png"
        className="rounded-md object-cover object-top transition-transform duration-300 cursor-grab hover:scale-105"
        draggable={false}
      />
      <div className="flex py-2">
        <ul className="flex flex-wrap gap-y-2 gap-2 *:bg-black *:text-center *:px-5 *:py-1 *:border *:border-zinc-950 *:rounded-xl ">
          <li className="hover:bg-teal-800">NodeJs</li>
          <li>Styled Componentes</li>
          <li>Express</li>
          <li>jabasdfas</li>
          <li className="justify-items-start">axiosdasda</li>
          <li>HTML</li>
          <li>tailwindcss</li>
        </ul>
      </div>
    </div>
  );
}
