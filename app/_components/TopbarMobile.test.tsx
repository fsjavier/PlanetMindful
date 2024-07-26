import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TopnavbarMobile from "./TopbarMobile";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Local Data", path: "/local-data" },
  { name: "Global Impact", path: "/global-impact" },
  { name: "Contributions", path: "/contributions" },
  { name: "Resources", path: "/resources" },
  { name: "Account", path: "/account" },
];

describe("TopnavbarMobile", () => {
  test("initial render: menu button is visible", () => {
    render(<TopnavbarMobile />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  test("toggle menu: clicking the menu button opens the menu", async () => {
    render(<TopnavbarMobile />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    await userEvent.click(menuButton);

    const closeButton = screen.getByRole("button", { name: /close menu/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("all links are present", async () => {
    render(<TopnavbarMobile />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    await userEvent.click(menuButton);

    const closeButton = screen.getByRole("button", { name: /close menu/i });
    expect(closeButton).toBeInTheDocument();

    links.forEach((link) => {
      const linkElement = screen.getByRole("link", { name: link.name });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.path);
    });
  });

  test("close menu: clicking the close button closes the menu", async () => {
    render(<TopnavbarMobile />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    await userEvent.click(menuButton);

    const closeButton = screen.getByRole("button", { name: /close menu/i });
    await userEvent.click(closeButton);

    expect(
      screen.queryByRole("button", { name: /close menu/i })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /toggle menu/i })
    ).toBeInTheDocument();
  });

  test("menu links: clicking a link closes the menu", async () => {
    render(<TopnavbarMobile />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    await userEvent.click(menuButton);

    const homeLink = screen.getByRole("link", { name: /home/i });
    await userEvent.click(homeLink);

    expect(
      screen.queryByRole("button", { name: /close menu/i })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /toggle menu/i })
    ).toBeInTheDocument();
  });

  test("menu button is visible on mobile devices", async () => {
    const originalInnerWidth = global.innerWidth;

    // Simulate mobile device
    global.innerWidth = 500;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    render(<TopnavbarMobile />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();

    // Restore original innerWidth
    global.innerWidth = originalInnerWidth;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
  });

  test("menu button is hidden on desktop devices", async () => {
    const originalInnerWidth = global.innerWidth;

    // Simulate desktop device
    global.innerWidth = 1024;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
    render(<TopnavbarMobile />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    expect(menuButton).toHaveClass("md:hidden");

    // Restore original innerWidth
    global.innerWidth = originalInnerWidth;
    act(() => {
      global.dispatchEvent(new Event("resize"));
    });
  });
});
