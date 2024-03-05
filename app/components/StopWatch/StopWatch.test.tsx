import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import {
  RESET_BUTTON_LABEL,
  START_BUTTON_LABEL,
  STOP_BUTTON_LABEL,
  StopWatch,
  TITLE,
} from "app/components/StopWatch/StopWatch";

describe("test StopWatch", () => {
  describe("tests initial state", () => {
    test("renders title", () => {
      render(<StopWatch />);

      expect(screen.getByText(TITLE)).toBeInTheDocument();
    });

    test("renders 0 as elapsed time initially", () => {
      render(<StopWatch />);

      expect(screen.getByText("0")).toBeInTheDocument();
    });

    test("renders the start button initially", () => {
      render(<StopWatch />);

      expect(screen.getByText(START_BUTTON_LABEL)).toBeInTheDocument();
    });

    test("does not render the stop button initially", () => {
      render(<StopWatch />);

      expect(screen.queryByText(STOP_BUTTON_LABEL)).not.toBeInTheDocument();
    });
  });

  test("renders the reset button", () => {
    render(<StopWatch />);

    expect(screen.getByText(RESET_BUTTON_LABEL)).toBeInTheDocument();
  });

  test("renders the stop button after clicking start", async () => {
    const user = userEvent.setup();

    render(<StopWatch />);

    await user.click(screen.getByText(START_BUTTON_LABEL));
    expect(screen.getByText(STOP_BUTTON_LABEL)).toBeInTheDocument();
  });

  test("elapsed time is being updated", async () => {
    const user = userEvent.setup();
    const initialElapsedTime = "0";
    const updatedElapsedTime = "1";

    render(<StopWatch />);

    expect(screen.getByText(initialElapsedTime)).toBeInTheDocument();
    await user.click(screen.getByText(START_BUTTON_LABEL));
    expect(await screen.findByText(updatedElapsedTime)).toBeInTheDocument();
    expect(screen.queryByText(initialElapsedTime)).not.toBeInTheDocument();
  });

  test("renders the initial render after clicking reset", async () => {
    const user = userEvent.setup();
    const initialElapsedTime = "0";
    const updatedElapsedTime = "1";

    render(<StopWatch />);

    await user.click(screen.getByText(START_BUTTON_LABEL));
    await screen.findByText(updatedElapsedTime);
    await user.click(screen.getByText(RESET_BUTTON_LABEL));
    expect(screen.getByText(TITLE)).toBeInTheDocument();
    expect(screen.getByText(initialElapsedTime)).toBeInTheDocument();
    expect(screen.getByText(START_BUTTON_LABEL)).toBeInTheDocument();
    expect(screen.queryByText(STOP_BUTTON_LABEL)).not.toBeInTheDocument();
  });
});
