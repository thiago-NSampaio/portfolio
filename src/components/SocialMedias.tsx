import { Mail } from "lucide-react";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";
import { SocialButton } from "./SocialButton";

export function SocialMedias() {
  return (
    <div className="flex items-center justify-center mb-4 pt-4 gap-6">
      <SocialButton
        href="https://www.instagram.com/thiagu_nascimento/"
        title="Instagram"
        gradient="from-zinc-500 via-zinc-100 to-zinc-600"
      >
        <InstagramLogo className="w-8 h-8" />
      </SocialButton>
      <SocialButton
        href="mailto:thiagosampaio.d3v@gmail.com"
        title="Gmail"
        gradient="from-zinc-500 via-zinc-100 to-zinc-600"
      >
        <Mail className="w-8 h-8" />
      </SocialButton>
      <SocialButton
        href="https://wa.me/5592985508380"
        title="WhatsApp"
        gradient="from-zinc-500 via-zinc-100 to-zinc-600"
      >
        <WhatsappLogo className="w-8 h-8" />
      </SocialButton>
    </div>
  );
}
