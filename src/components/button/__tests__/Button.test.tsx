import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";

describe("Button", () => {
  it("renders correctly with primary variant", () => {
    render(<Button aria-label="Test button">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button--primary");
  });

  it("renders correctly with secondary variant", () => {
    render(<Button variant="secondary" aria-label="Test secondary button">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass("button--secondary");
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/test" aria-label="Test link button">Click me</Button>);
    const link = screen.getByRole("link", { name: /click me/i });
    expect(link).toHaveAttribute("href", "/test");
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} aria-label="Test click button">Click me</Button>);

    const button = screen.getByRole("button", { name: /click me/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
