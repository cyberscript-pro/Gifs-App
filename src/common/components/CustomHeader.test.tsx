import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {
  const title = "Test Header";

  test("should render the title correctly", () => {
    render(<CustomHeader title={title} />);

    expect(screen.getByText(title)).toBeDefined();
  });

  test("should render the description when provided", () => {
    const descriptionTest = "This is a test description.";

    render(<CustomHeader title={title} description={descriptionTest} />);

    expect(screen.getByText(descriptionTest)).toBeDefined();
    expect(screen.getByRole("paragraph")).toBeDefined();
    expect(screen.getByRole("paragraph").innerHTML).toBe(descriptionTest);
  });

  test("should not render the description when not provided", () => {
    const { container } = render(<CustomHeader title={title} />);

    const description = container.querySelector("p");
    expect(description).toBeNull();
  });
});
