import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "./Sidebar";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Local Data", path: "/local-data" },
  { name: "Global Impact", path: "/global-impact" },
  { name: "Contributions", path: "/contributions" },
  { name: "Resources", path: "/resources" },
];

describe("Sidebar", () => {
  test("sidebar is closed in initial render", () => {
    render(<Sidebar />);
    const toggleButton = screen.getByRole("button", { name: /❯/i });
    expect(toggleButton).toBeInTheDocument();
    const navigationMenu = screen.queryByRole("navigation");
    expect(navigationMenu).toHaveClass("hidden");
  });

  test("clicking the right chrevron button opens the sidebar", async () => {
    render(<Sidebar />);
    const toggleButton = screen.getByRole("button", { name: /❯/i });
    await userEvent.click(toggleButton);
    const navigationMenu = screen.queryByRole("navigation");
    expect(navigationMenu).toHaveClass("block");
    expect(screen.getByRole("button", { name: /❮/i })).toBeInTheDocument();
  });

  test("clicking the left chrevron button closes the sidebar", async () => {
    render(<Sidebar />);
    const rightChevronButton = screen.getByRole("button", { name: /❯/i });
    const navigationMenu = screen.queryByRole("navigation");
    await userEvent.click(rightChevronButton);
    expect(navigationMenu).toHaveClass("block");
    const leftChevronButton = screen.getByRole("button", { name: /❮/i });
    expect(leftChevronButton).toBeInTheDocument();
    await userEvent.click(leftChevronButton);
    expect(navigationMenu).toHaveClass("hidden");
  });

  test("all links are present when the sidebar is open", async () => {
    render(<Sidebar />);
    const toggleButton = screen.getByRole("button", { name: /❯/i });
    await userEvent.click(toggleButton);

    links.forEach((link) => {
      const linkElement = screen.getByRole("link", { name: link.name });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.path);
    });
  });
});
