import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("empty state", () => {
  it("explains that no books match and suggests changing filters", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByRole("searchbox", { name: "Search" }), "unmatched book");

    const emptyState = screen.getByRole("status");
    expect(within(emptyState).getByRole("heading", { name: "No matching books found" })).toBeTruthy();
    expect(
      within(emptyState).getByText("Try a different search term, genre, or reading status.")
    ).toBeTruthy();
  });
});
