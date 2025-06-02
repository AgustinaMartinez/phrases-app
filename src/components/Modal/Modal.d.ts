interface DeleteModalProps {
    isOpen: boolean;
    phrase: string;
    onCancel: () => void;
    onConfirm: () => void;
}
export declare const DeleteModal: ({ isOpen, phrase, onCancel, onConfirm, }: DeleteModalProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
