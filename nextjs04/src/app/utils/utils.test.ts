import "@testing-library/jest-dom";

import { convertDateFormat, sum } from "./utils";
describe("utils logic", () => {
  it("sum function", () => {
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(1, 2, 3, 4)).toBe(10);
    expect(sum()).toBe(0);
    expect(sum(NaN, 1, 2, 3)).toBe(NaN);
    expect(sum(Infinity, 1, 2, 3)).toBe(NaN);
  });

  it("sum function", () => {
    expect(convertDateFormat("2024-12-25 09:30:20")).toBe(
      "25/12/2024 09:30:20"
    );
  });
});
