import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { PhrasesContext } from "../store/phrases.store";
import { Card } from "../components";

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
    render(
      <PhrasesContext.Provider value={mockContext}>
        <Card
          phrase={{ text: "test frase", createdAt: new Date().toISOString() }}
          index={0}
        />
      </PhrasesContext.Provider>
    );

    expect(screen.getByText("test frase"));
    expect(screen.getByText(/\d{2}\/\d{2}\/\d{4}/));
  });

  it("calls deletePhrase when trash button is clicked", () => {
    render(
      <PhrasesContext.Provider value={mockContext}>
        <Card
          phrase={{ text: "test frase", createdAt: new Date().toISOString() }}
          index={1}
        />
      </PhrasesContext.Provider>
    );

    const button = screen.getByRole("button", { name: /borrar frase/i });
    fireEvent.click(button);
    expect(mockContext.deletePhrase).toHaveBeenCalledWith(1);
  });
});
