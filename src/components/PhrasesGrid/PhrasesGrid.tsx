import { useState } from "react";
import { usePhrases } from "../../hooks/usePhrases";
import { Card } from "../Card/Card";
import { DeleteModal } from "../Modal/Modal";
import { Toast } from "../Toast/Toast";

export const PhrasesGrid = () => {
  const { phrases, search, deletePhrase } = usePhrases();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleOpenModal = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId) {
      deletePhrase(selectedId);
      setModalOpen(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  const filteredPhrases = phrases
    .filter((phrase) =>
      phrase.text.toLowerCase().includes(search.toLowerCase())
    )
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-5">
        {filteredPhrases.map((phrase, index) => (
          <Card
            key={`phrase-${index}`}
            phrase={phrase}
            onDeleteClick={handleOpenModal}
          />
        ))}
      </div>
      {selectedId && (
        <DeleteModal
          isOpen={modalOpen}
          phrase={phrases.find((p) => p.id === selectedId)?.text || ""}
          onCancel={() => setModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
      {showToast && <Toast />}
    </>
  );
};
