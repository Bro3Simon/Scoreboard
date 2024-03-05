import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { AddPlayer } from "app/components/AddPlayer";

describe("test AddPlayer", () => {
  test("renders a textbox", () => {
    const handleAddPlayer = jest.fn((newPlayerName) => newPlayerName);

    render(<AddPlayer onAddPlayer={handleAddPlayer} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders a button", () => {
    const handleAddPlayer = jest.fn((newPlayerName) => newPlayerName);

    render(<AddPlayer onAddPlayer={handleAddPlayer} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("calls handleAddPlayer with the correct argument", async () => {
    const newPlayerName = "Jim";
    const handleAddPlayer = jest.fn((newPlayerName) => newPlayerName);
    const user = userEvent.setup();

    render(<AddPlayer onAddPlayer={handleAddPlayer} />);

    await user.type(screen.getByRole("textbox"), newPlayerName);
    await user.click(screen.getByRole("button"));
    expect(handleAddPlayer).toHaveBeenCalledWith(newPlayerName);
    jest.resetAllMocks();
  });
});
