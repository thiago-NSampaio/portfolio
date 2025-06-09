export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex flex-col items-center bg-black md:items-end border-t border-t-zinc-500 *:top-0 *:text-lg *:text-zinc-400 *:md:text-sm">
      <div className="py-1 md:py-4 md:pr-3">
        <p>© {year} Thiago Nascimento</p>
        <p>Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
