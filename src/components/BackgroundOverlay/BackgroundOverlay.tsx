export const BackgroundOverlay = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-400 border-4 border-black transform rotate-45"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-400 border-4 border-black rounded-full"></div>
      <div className="absolute bottom-20 left-32 w-24 h-12 bg-green-400 border-4 border-black"></div>
      <div className="absolute bottom-40 right-10 w-14 h-14 bg-purple-400 border-4 border-black transform rotate-12"></div>
      <div className="absolute top-1/2 left-1/4 w-18 h-18 bg-orange-400 border-4 border-black rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-400 border-4 border-black transform -rotate-45"></div>
    </div>
  );
};
