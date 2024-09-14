export function ProjectRow() {
  return (
    <div className="group relative min-h-[12vh] min-w-[20vw] md:min-h-[12vw] md:min-w-[20vw] rounded-md overflow-hidden">
      <img
        alt="notes"
        src="./notes.png"
        width={600}
      
        className="w-[400px] h-[400px] rounded-md object-cover object-top transition-transform duration-300 cursor-grab group-hover:scale-105"
      />
    </div>
  );
}
