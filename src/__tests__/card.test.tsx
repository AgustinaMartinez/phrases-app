import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { Card } from "../components";
import type { Phrase } from "../models/phrase";

describe("Card", () => {
  const mockOnDeleteClick = vi.fn();

  const testPhrase: Phrase = {
    id: "123",
    text: "test frase",
    createdAt: new Date().toISOString(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders a phrase and date", () => {
    render(<Card phrase={testPhrase} onDeleteClick={mockOnDeleteClick} />);

    expect(screen.getByText("test frase"));
    expect(screen.getByText(/\d{2}\/\d{2}\/\d{4}/));
  });

  it("calls onDeleteClick when trash button is clicked", () => {
    render(<Card phrase={testPhrase} onDeleteClick={mockOnDeleteClick} />);

    const button = screen.getByRole("button", { name: /borrar frase/i });
    fireEvent.click(button);

    expect(mockOnDeleteClick).toHaveBeenCalled();
  });
});
