export function ItemsRow() {
  return (
    <div className="group relative min-h-[12vh] min-w-[20vw] max-w-sm md:max-w-lg md:min-h-[12vw] md:min-w-[20vw] rounded-md overflow-hidden">
      <img
        alt="notes"
        src="./projects/notes.png"
        className="rounded-md object-cover object-top transition-transform duration-300 cursor-grab group-hover:scale-105"
      />
    </div>
  );
}
