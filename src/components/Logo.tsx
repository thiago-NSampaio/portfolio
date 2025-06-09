export function Logo() {
  return (
    <div
      className="pl-2 font-bold text-xl md:text-xl"
      style={{
        animation: `shadowMove 1s ease-in-out infinite`,
        animationDirection: "alternate-reverse",
      }}
    >
      <span className="flex bg-transparent">
        {[
          "<",
          "\u00A0",
          "T",
          "h",
          "i",
          "a",
          "g",
          "o",
          "\u00A0",
          "N",
          "a",
          "s",
          "c",
          "i",
          "m",
          "e",
          "n",
          "t",
          "o",
          "\u00A0",
          "/>",
        ].map((char, index) => (
          <span
            key={index}
            className="inline-block text-white tracking-wide md:tracking-[0.15rem]"
            style={{
              animation: `shadowMove 5s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`,
              letterSpacing: "-0.5em md:-0.6rem",
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
}
