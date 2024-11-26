import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "./page";
import { Suspense } from "react";
describe("About", () => {
  it("render page", async () => {
    render(
      <Suspense>
        <About />
      </Suspense>
    );
    const text = await screen.findByText(/nextjs/i);
    expect(text).toBeInTheDocument();
  });
});
