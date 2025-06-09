import { Mail } from "lucide-react";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";

export function SocialMedias() {
  return (
    <div className="flex items-center justify-center mb-2 pt-3 space-x-5">
      <a
        href="https://www.instagram.com/thiagu_nascimento/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent"
        title="Instagram"
      >
        <InstagramLogo className="w-12 h-12 text-zinc-300 hover:text-fuchsia-700 transition duration-200" />
      </a>
      <a
        href="mailto:thiagosampaio.d3v@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent"
        title="Gmail"
      >
        <Mail className="w-12 h-12 text-zinc-300 hover:text-red-600 transition duration-200" />
      </a>
      <a
        href="https://wa.me/5592985508380"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent"
        title="WhatsApp"
      >
        <WhatsappLogo className="w-12 h-12 text-zinc-300 hover:text-orange-500 transition duration-200" />
      </a>
    </div>
  );
}
