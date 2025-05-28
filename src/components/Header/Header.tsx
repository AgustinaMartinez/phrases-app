export const Header = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black drop-shadow-[4px_4px_0px_var(--white)] transform -rotate-1">
        Tus frases
      </h1>
      <p className="text-lg md:text-2xl lg:text-2xl font-black text-black bg-white custom-border px-4 py-2 inline-block transform rotate-1 shadow-[4px_4px_0px_#000000]">
        {"Anotá pensamientos, ideas, to-dos y más...".toUpperCase()}
      </p>
    </div>
  );
};
