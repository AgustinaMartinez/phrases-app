import { XIcon } from "@primer/octicons-react";

interface DeleteModalProps {
  isOpen: boolean;
  phrase: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteModal = ({
  isOpen,
  phrase,
  onCancel,
  onConfirm,
}: DeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4 min-h-lvh">
      <div className="bg-white p-6 rounded-lg border-4 border-black shadow-xl w-full max-w-md relative">
        <button
          onClick={onCancel}
          className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-black"
        >
          <XIcon size={18} />
        </button>

        <h2 className="text-2xl font-black mb-2 flex items-center gap-2">
          Borrar frase?
        </h2>

        <p className="font-semibold mb-4">
          Esta acción es <span className="text-red-500">irreversible</span>!
          Tené en cuenta que no vas a poder recuperarla.
        </p>

        <div className="bg-gray-200 p-3 rounded font-medium italic text-black mb-6 border border-gray-400 break-words">
          &quot;{phrase}&quot;
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 custom-shadow cursor-pointer rounded border-2 border-black"
          >
            Mejor no
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 custom-shadow cursor-pointer rounded border-2 border-black"
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};
