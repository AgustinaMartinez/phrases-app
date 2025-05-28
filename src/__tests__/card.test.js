import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "../components/Card";
import { PhrasesContext } from "../store/phrases.store";
import { vi, describe, it, expect, beforeEach } from "vitest";
const mockContext = {
    deletePhrase: vi.fn(),
    phrases: [],
    setPhrases: vi.fn(),
    search: "",
    setSearch: vi.fn(),
};
describe("Card", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it("renders a phrase and date", () => {
        render(_jsx(PhrasesContext.Provider, { value: mockContext, children: _jsx(Card, { phrase: { text: "test frase", createdAt: new Date().toISOString() }, index: 0 }) }));
        expect(screen.getByText("test frase"));
        expect(screen.getByText(/\d{2}\/\d{2}\/\d{4}/));
    });
    it("calls deletePhrase when trash button is clicked", () => {
        render(_jsx(PhrasesContext.Provider, { value: mockContext, children: _jsx(Card, { phrase: { text: "test frase", createdAt: new Date().toISOString() }, index: 1 }) }));
        const button = screen.getByRole("button", { name: /borrar frase/i });
        fireEvent.click(button);
        expect(mockContext.deletePhrase).toHaveBeenCalledWith(1);
    });
});
