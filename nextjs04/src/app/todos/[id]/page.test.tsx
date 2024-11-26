import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoDetail from "./page";
describe("TodoDetail", () => {
  it("render TodoDetail", async () => {
    const Resolved = await TodoDetail({ params: Promise.resolve({ id: 1 }) });
    render(Resolved);
    const text1 = await screen.findByText(/Todo ID: 1$/);
    expect(text1).toBeInTheDocument();
  });

  it("test prop id 01", async () => {
    const Resolved = await TodoDetail({
      params: Promise.resolve({ id: "xin-chao" }),
    });
    render(Resolved);

    const text1 = await screen.findByText(/Todo ID: xin-chao$/);
    expect(text1).toBeInTheDocument();
  });

  it("test prop id 02", async () => {
    const Resolved = await TodoDetail({
      params: Promise.resolve({ id: "xin-chao-1-1.html" }),
    });
    render(Resolved);
    const text1 = await screen.findByText(/Todo ID: xin-chao-1$/);
    expect(text1).toBeInTheDocument();
  });

  it("test prop id 03", async () => {
    const Resolved = await TodoDetail({
      params: Promise.resolve({
        id: "tong-bi-thu-bo-may-sau-sap-xep-phai-hoat-dong-ngay-4820246.html",
      }),
    });
    render(Resolved);

    const text1 = await screen.findByText(
      /Todo ID: tong-bi-thu-bo-may-sau-sap-xep-phai-hoat-dong-ngay$/
    );
    expect(text1).toBeInTheDocument();
  });
});
