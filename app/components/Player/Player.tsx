import StarIcon from "@mui/icons-material/Star";
import { Box, Typography } from "@mui/material";

import { PlayerButton } from "app/components/PlayerButton";
import { Action, PLAYERS } from "app/components/Scoreboard/useScoreboard";

type PlayerProps = {
  highScore: number;
  player: (typeof PLAYERS)[0];
  onAdjustPlayerScore: (id: number, action: Action) => void;
  onRemovePlayer: (id: number) => void;
};

export const REMOVE_BUTTON_TEXT = "X";
export const DECREMENT_BUTTON_TEXT = "-";
export const INCREMENT_BUTTON_TEXT = "+";

export function Player({
  highScore,
  player: { id, name, score },
  onAdjustPlayerScore,
  onRemovePlayer,
}: PlayerProps) {
  function handleRemovePlayer() {
    onRemovePlayer(id);
  }

  function handleDecrementScore() {
    onAdjustPlayerScore(id, "decrement");
  }

  function handleIncrementScore() {
    onAdjustPlayerScore(id, "increment");
  }

  return (
    <Box alignItems="center" border={1} display="flex" gap={2} p={1}>
      <PlayerButton onClick={handleRemovePlayer} text={REMOVE_BUTTON_TEXT} />

      <Box alignItems="center" display="flex" flexGrow={1} gap={1}>
        {highScore === score ? <StarIcon sx={{ color: "gold" }} /> : null}

        <Typography
          sx={{
            overflowWrap: "anywhere",
          }}
          {...(highScore === score && {
            color: "gold",
            fontWeight: "bold",
          })}
        >
          {name}
        </Typography>
      </Box>

      <Box alignItems="center" display="flex" gap={1}>
        <PlayerButton
          onClick={handleDecrementScore}
          text={DECREMENT_BUTTON_TEXT}
        />

        <Typography minWidth="2em" my={2} textAlign="center">
          {score}
        </Typography>

        <PlayerButton
          onClick={handleIncrementScore}
          text={INCREMENT_BUTTON_TEXT}
        />
      </Box>
    </Box>
  );
}
