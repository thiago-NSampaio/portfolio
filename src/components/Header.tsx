import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { useMediaQuery } from "react-responsive";

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // Esconde ao descer
      } else {
        setShowHeader(true); // Mostra ao subir
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{
        transition: "top 0.3s",
        position: "fixed",
        top: showHeader ? 0 : "-80px", // ajuste a altura conforme seu header
        width: "100%",
        zIndex: 1000,
      }}
      className={`border-b border-zinc-500 h-16 z-50 flex w-full items-center justify-between bg-black`}
    >
      <Logo />
      <NavBar isDesktop={isDesktop} />
    </header>
  );
}
