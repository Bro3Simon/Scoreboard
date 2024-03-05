import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { ADD_PLAYER_TEXT } from "app/components/AddPlayer/AddPlayer";
import * as useAddPlayer from "app/components/AddPlayer/useAddPlayer";
import {
  DECREMENT_BUTTON_TEXT,
  INCREMENT_BUTTON_TEXT,
  REMOVE_BUTTON_TEXT,
} from "app/components/Player/Player";
import {
  PLAYERS_TITLE,
  Scoreboard,
} from "app/components/Scoreboard/Scoreboard";
import { PLAYERS } from "app/components/Scoreboard/useScoreboard";
import * as useStopWatch from "app/components/StopWatch/useStopWatch";

export const STAR_ICON_TEST_ID = "StarIcon";

jest.mock("app/components/AddPlayer/useAddPlayer", () => ({
  __esModule: true,
  ...jest.requireActual("app/components/AddPlayer/useAddPlayer"),
}));

jest.mock("app/components/StopWatch/useStopWatch", () => ({
  __esModule: true,
  ...jest.requireActual("app/components/StopWatch/useStopWatch"),
}));

describe("test Scoreboard", () => {
  test("renders players title and count", () => {
    render(<Scoreboard />);

    expect(screen.getByText(`${PLAYERS_TITLE} ${PLAYERS.length}`));
  });

  test("renders StopWatch", () => {
    const useStopWatchSpy = jest.spyOn(useStopWatch, "useStopWatch");

    render(<Scoreboard />);

    expect(useStopWatchSpy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  test("does not render a gold star initially", () => {
    render(<Scoreboard />);

    expect(screen.queryByTestId(STAR_ICON_TEST_ID)).not.toBeInTheDocument();
  });

  test("renders all the players", () => {
    render(<Scoreboard />);

    PLAYERS.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test("renders each player's score as 0 initially", () => {
    const stopWatch0Count = 1;

    render(<Scoreboard />);

    expect(screen.getAllByText("0").length).toEqual(
      PLAYERS.length + stopWatch0Count
    );
  });

  test("renders AddPlayer", () => {
    const useAddPlayerSpy = jest.spyOn(useAddPlayer, "useAddPlayer");

    render(<Scoreboard />);

    expect(useAddPlayerSpy).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  test("clicking the remove button removes a player", async () => {
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.click(screen.getAllByText(REMOVE_BUTTON_TEXT)[0]);
    expect(screen.getAllByText(REMOVE_BUTTON_TEXT).length).toEqual(
      PLAYERS.length - 1
    );
  });

  test("clicking the decrement button decrements the score by one", async () => {
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.click(screen.getAllByText(DECREMENT_BUTTON_TEXT)[0]);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("clicking the increment button decrements the score by one", async () => {
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.click(screen.getAllByText(INCREMENT_BUTTON_TEXT)[0]);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("renders a new player row with the correct name after clicking add player", async () => {
    const newPlayerCount = PLAYERS.length + 1;
    const newPlayerName = "Jim";
    const stopWatch0Count = 1;
    const user = userEvent.setup();

    render(<Scoreboard />);

    await user.type(screen.getByRole("textbox"), newPlayerName);
    await user.click(screen.getByText(ADD_PLAYER_TEXT));
    expect(screen.getAllByText(REMOVE_BUTTON_TEXT).length).toEqual(
      newPlayerCount
    );
    expect(screen.getByText(newPlayerName)).toBeInTheDocument();
    expect(screen.getAllByText(DECREMENT_BUTTON_TEXT).length).toEqual(
      newPlayerCount
    );
    expect(screen.getAllByText("0").length).toEqual(
      newPlayerCount + stopWatch0Count
    );
    expect(screen.getAllByText(INCREMENT_BUTTON_TEXT).length).toEqual(
      newPlayerCount
    );
  });
});
