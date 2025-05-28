import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "../components";
import { PhrasesContext } from "../store/phrases.store";
import { vi, describe, it, expect, beforeEach } from "vitest";

describe("Input", () => {
  const mockContext = {
    input: "",
    setInput: vi.fn(),
    phrases: [],
    setPhrases: vi.fn(),
    handleSubmit: vi.fn((e) => e.preventDefault()),
    handleKeyPress: vi.fn(),
    search: "",
    setSearch: vi.fn(),
    deletePhrase: vi.fn(),
    clearAll: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("updates the input value when typing", () => {
    render(
      <PhrasesContext.Provider value={mockContext}>
        <Form />
      </PhrasesContext.Provider>
    );

    const input = screen.getByPlaceholderText(
      "Escribí una frase..."
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hola" } });

    expect(input.value).toBe("hola");
  });

  it("clears input on form submit", () => {
    render(
      <PhrasesContext.Provider value={mockContext}>
        <Form />
      </PhrasesContext.Provider>
    );

    const input = screen.getByPlaceholderText(
      "Escribí una frase..."
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test frase" } });
    fireEvent.submit(screen.getByText("Agregar!").closest("form")!);

    expect(input.value).toBe("");
  });
});
