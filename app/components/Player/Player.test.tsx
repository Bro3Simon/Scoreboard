import { render, renderHook, screen } from "@testing-library/react";

import { Player } from "app/components/Player";
import {
  DECREMENT_BUTTON_TEXT,
  INCREMENT_BUTTON_TEXT,
  REMOVE_BUTTON_TEXT,
} from "app/components/Player/Player";
import { STAR_ICON_TEST_ID } from "app/components/Scoreboard/Scoreboard.test";
import {
  PLAYERS,
  useScoreboard,
} from "app/components/Scoreboard/useScoreboard";

const highScore = 1;
const player = PLAYERS[0];

describe("test Scoreboard", () => {
  test("renders a remove button", () => {
    const {
      result: {
        current: { handleAdjustPlayerScore, handleRemovePlayer },
      },
    } = renderHook(useScoreboard);

    render(
      <Player
        highScore={highScore}
        onAdjustPlayerScore={handleAdjustPlayerScore}
        onRemovePlayer={handleRemovePlayer}
        player={player}
      />
    );

    expect(screen.getByText(REMOVE_BUTTON_TEXT)).toBeInTheDocument();
  });

  test("does not render a gold star initially", () => {
    const {
      result: {
        current: { handleAdjustPlayerScore, handleRemovePlayer },
      },
    } = renderHook(useScoreboard);

    render(
      <Player
        highScore={highScore}
        onAdjustPlayerScore={handleAdjustPlayerScore}
        onRemovePlayer={handleRemovePlayer}
        player={player}
      />
    );

    expect(screen.queryByTestId("StarIcon")).not.toBeInTheDocument();
  });

  test("renders the player's name", () => {
    const {
      result: {
        current: { handleAdjustPlayerScore, handleRemovePlayer },
      },
    } = renderHook(useScoreboard);

    render(
      <Player
        highScore={highScore}
        onAdjustPlayerScore={handleAdjustPlayerScore}
        onRemovePlayer={handleRemovePlayer}
        player={player}
      />
    );

    expect(screen.getByText(player.name)).toBeInTheDocument();
  });

  test("renders a decrement button", () => {
    const {
      result: {
        current: { handleAdjustPlayerScore, handleRemovePlayer },
      },
    } = renderHook(useScoreboard);

    render(
      <Player
        highScore={highScore}
        onAdjustPlayerScore={handleAdjustPlayerScore}
        onRemovePlayer={handleRemovePlayer}
        player={player}
      />
    );

    expect(screen.getByText(DECREMENT_BUTTON_TEXT)).toBeInTheDocument();
  });

  test("renders player's score as 0 initially", () => {
    const {
      result: {
        current: { handleAdjustPlayerScore, handleRemovePlayer },
      },
    } = renderHook(useScoreboard);

    render(
      <Player
        highScore={highScore}
        onAdjustPlayerScore={handleAdjustPlayerScore}
        onRemovePlayer={handleRemovePlayer}
        player={player}
      />
    );

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("renders an increment button", () => {
    const {
      result: {
        current: { handleAdjustPlayerScore, handleRemovePlayer },
      },
    } = renderHook(useScoreboard);

    render(
      <Player
        highScore={highScore}
        onAdjustPlayerScore={handleAdjustPlayerScore}
        onRemovePlayer={handleRemovePlayer}
        player={player}
      />
    );

    expect(screen.getByText(INCREMENT_BUTTON_TEXT)).toBeInTheDocument();
  });

  test("renders a gold star for the player with the high score", () => {
    const {
      result: {
        current: { handleAdjustPlayerScore, handleRemovePlayer },
      },
    } = renderHook(useScoreboard);

    render(
      <Player
        highScore={highScore}
        onAdjustPlayerScore={handleAdjustPlayerScore}
        onRemovePlayer={handleRemovePlayer}
        player={{ ...player, score: 1 }}
      />
    );

    expect(screen.getByTestId(STAR_ICON_TEST_ID)).toBeInTheDocument();
  });
});
