import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLinks } from "./NavLinks";

export function NavBar({ isDesktop }: { isDesktop: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isDesktop]);

  return (
    <>
      {!isDesktop && (
        <MenuIcon
          onClick={openMenu}
          className="cursor-pointer absolute top-5 right-4 md:size-8 text-white"
        />
      )}
      <NavLinks
        closeMenu={closeMenu}
        isDesktop={isDesktop}
        isMenuOpen={isMenuOpen}
      />
    </>
  );
}
