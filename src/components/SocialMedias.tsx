import { Mail } from "lucide-react";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";
import { SocialButton } from "./SocialButton";

export function SocialMedias() {
  return (
    <div className="flex items-center justify-center mb-4 pt-4 gap-6">
      <SocialButton
        href="https://www.instagram.com/thiagu_nascimento/"
        title="Instagram"
        gradient="from-pink-700 via-fuchsia-700 to-yellow-400"
      >
        <InstagramLogo className="w-8 h-8" />
      </SocialButton>
      <SocialButton
        href="mailto:thiagosampaio.d3v@gmail.com"
        title="Gmail"
        gradient="from-red-700 via-pink-700 to-yellow-500"
      >
        <Mail className="w-8 h-8" />
      </SocialButton>
      <SocialButton
        href="https://wa.me/5592985508380"
        title="WhatsApp"
        gradient="from-green-600 via-teal-700 to-emerald-500"
      >
        <WhatsappLogo className="w-8 h-8" />
      </SocialButton>
    </div>
  );
}
