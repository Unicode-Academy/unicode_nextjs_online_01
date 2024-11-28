import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Posts from "./page";
describe("Posts", () => {
  it("render Post List", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([
        {
          id: 1,
          title: "Learn ReactJS",
          body: "Body Learn ReactJS",
        },

        {
          id: 2,
          title: "Learn NextJS",
          body: "Body Learn NextJS",
        },
      ]),
    });
    const Resolved = await Posts();
    render(Resolved);
    const heading = await screen.findByRole("heading", {
      level: 1,
      name: /Post List/,
    });
    expect(heading).toBeInTheDocument();

    const post1 = await screen.findByRole("heading", {
      level: 2,
      name: /Learn ReactJS/,
    });
    expect(post1).toBeInTheDocument();

    const post2 = await screen.findByRole("heading", {
      level: 2,
      name: /Learn NextJS/,
    });
    expect(post2).toBeInTheDocument();
  });
});
