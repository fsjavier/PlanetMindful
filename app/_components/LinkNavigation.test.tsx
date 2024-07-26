import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LinkNavigation from "./LinkNavigation";
import { vi } from "vitest";

describe("LinkNavigation", () => {
  test("renders link with given props", () => {
    render(<LinkNavigation to="/about">About</LinkNavigation>);
    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/about");
  });

  test("calls onClickHandler when clicked", async () => {
    const handleClick = vi.fn();
    render(
      <LinkNavigation to="/about" onClickHandler={handleClick}>
        About
      </LinkNavigation>
    );
    const linkElement = screen.getByText(/about/i);
    await userEvent.click(linkElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
