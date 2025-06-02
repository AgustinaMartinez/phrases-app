import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { usePhrases } from "../../hooks/usePhrases";
import { Card } from "../Card/Card";
import { DeleteModal } from "../Modal/Modal";
import { Toast } from "../Toast/Toast";
export const PhrasesGrid = () => {
    const { phrases, search, deletePhrase } = usePhrases();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedId, setSelectedId] = useState("");
    const [showToast, setShowToast] = useState(false);
    const handleOpenModal = (id) => {
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
        .filter((phrase) => phrase.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-5", children: filteredPhrases.map((phrase, index) => (_jsx(Card, { phrase: phrase, onDeleteClick: handleOpenModal }, `phrase-${index}`))) }), selectedId && (_jsx(DeleteModal, { isOpen: modalOpen, phrase: phrases.find((p) => p.id === selectedId)?.text || "", onCancel: () => setModalOpen(false), onConfirm: handleConfirmDelete })), showToast && _jsx(Toast, {})] }));
};
