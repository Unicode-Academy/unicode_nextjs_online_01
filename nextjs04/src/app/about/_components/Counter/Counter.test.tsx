import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
describe("Counter", () => {
  it("render Counter", () => {
    render(<Counter />);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Count:\s\d+/,
    });
    expect(heading).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "+",
    });
    expect(incrementButton).toBeInTheDocument();

    const decrementButton = screen.getByRole("button", {
      name: "-",
    });
    expect(decrementButton).toBeInTheDocument();
  });

  it("increment count", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });
    fireEvent.click(incrementButton);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Count:\s1/,
    });
    expect(heading).toBeInTheDocument();
  });

  it("decrement count", () => {
    render(<Counter />);
    const decrementButton = screen.getByRole("button", {
      name: "-",
    });
    fireEvent.click(decrementButton);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Count:\s-2/,
    });
    expect(heading).toBeInTheDocument();
  });
});
