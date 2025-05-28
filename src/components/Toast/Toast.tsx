import { CheckCircleIcon } from "@primer/octicons-react";

export const Toast = () => {
  return (
    <div className="fixed top-5 lg:right-6 md:right-6 z-20 bg-green-500 text-white px-4 py-2 w-[90%] md:w-fit lg:w-fit rounded border-2 border-black shadow-lg -translate-x-px animate-slide-down">
      <span className="flex items-center gap-4">
        <CheckCircleIcon size={24} />
        <span>La frase fue borrada con éxito</span>
      </span>
    </div>
  );
};
