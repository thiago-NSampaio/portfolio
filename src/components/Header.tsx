import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="fixed h-[116px] px-40 z-50 flex w-full items-center justify-between bg-black">
      <div className="text-3xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-teal-400">
          {"< "}Thiago Nascimento{" />"}
        </span>
      </div>
      <NavBar />
    </header>
  );
}
