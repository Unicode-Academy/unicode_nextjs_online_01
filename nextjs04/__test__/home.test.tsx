import Home from "@/app/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("HomePage", () => {
  it("render title", () => {
    render(<Home />);
    const title = screen.getByText("HomePage");
    expect(title).toBeInTheDocument();
  });
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /nextjs/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders a button", () => {
    render(<Home />);
    const button = screen.getByRole("button", {
      name: "Click me",
    });
    expect(button).toBeInTheDocument();
  });
  it("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
