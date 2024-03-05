import { useState } from "react";

export type Action = "decrement" | "increment";

export const PLAYERS = [
  {
    id: 1,
    name: "Guil",
    score: 0,
  },
  {
    id: 2,
    name: "Treasure123456789abcdefghijkl",
    score: 0,
  },
  {
    id: 3,
    name: "Ashley",
    score: 0,
  },
  {
    id: 4,
    name: "James",
    score: 0,
  },
];

export function useScoreboard() {
  const [players, setPlayers] = useState(PLAYERS);

  const highScore = players.reduce(
    (previousHighScore, { score }) => Math.max(previousHighScore, score),
    1, // Start at 1 so that 0 isn't the high score at start.
  );

  function handleAddPlayer(newPlayerName: string) {
    setPlayers((previousPlayers) => [
      ...previousPlayers,
      {
        id: previousPlayers[previousPlayers.length - 1].id + 1,
        name: newPlayerName,
        score: 0,
      },
    ]);
  }

  function handleRemovePlayer(playerId: number) {
    setPlayers((previousPlayers) =>
      previousPlayers.filter(({ id }) => id !== playerId),
    );
  }

  function handleAdjustPlayerScore(playerId: number, action: Action) {
    setPlayers((previousPlayers) =>
      previousPlayers.map((player) => {
        if (player.id !== playerId) return player;

        const newScore =
          action === "decrement" ? player.score - 1 : player.score + 1;

        return { ...player, score: newScore };
      }),
    );
  }

  return {
    handleAddPlayer,
    handleAdjustPlayerScore,
    handleRemovePlayer,
    highScore,
    players,
  };
}
