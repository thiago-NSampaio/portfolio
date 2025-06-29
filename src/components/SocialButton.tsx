type SocialButtonProps = {
  href: string;
  title: string;
  gradient: string;
  children: React.ReactNode;
};

export function SocialButton({
  href,
  title,
  gradient,
  children,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center
        rounded-full p-1
        bg-gradient-to-tr ${gradient}
        shadow-lg
        transition-transform duration-200 hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800
      `}
      title={title}
    >
      <span
        className={`
        flex items-center justify-center
        bg-zinc-900 rounded-full w-14 h-14
        transition-colors duration-200
        group-hover:bg-zinc-800
        border-2 border-zinc-800
      `}
      >
        {/* Ícones em cor clara para contraste */}
        <span className="text-zinc-100">{children}</span>
      </span>
    </a>
  );
}
