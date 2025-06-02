import type { Phrase } from "../../models/phrase";
interface CardProps {
    phrase: Phrase;
    onDeleteClick: (id: string) => void;
}
export declare const Card: ({ phrase, onDeleteClick }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
