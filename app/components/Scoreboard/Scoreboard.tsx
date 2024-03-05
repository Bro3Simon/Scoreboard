"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";

import { AddPlayer } from "app/components/AddPlayer";
import { Player } from "app/components/Player";
import { useScoreboard } from "app/components/Scoreboard/useScoreboard";
import { StopWatch } from "app/components/StopWatch";

export const PLAYERS_TITLE = "Players:";
const cardPadding = { sm: 6, xs: 2 };

export function Scoreboard() {
  const {
    handleAddPlayer,
    handleAdjustPlayerScore,
    handleRemovePlayer,
    highScore,
    players,
  } = useScoreboard();

  return (
    <Card sx={{ my: 4 }}>
      <CardContent
        sx={{
          ":last-child": { pb: cardPadding },
          p: cardPadding,
        }}
      >
        <Box
          alignItems="center"
          bgcolor="primary.main"
          color="primary.contrastText"
          display="flex"
          justifyContent="space-between"
          p={2}
          textTransform="uppercase"
        >
          <Typography>{`${PLAYERS_TITLE} ${players.length}`}</Typography>

          <StopWatch />
        </Box>

        <Box bgcolor="info.dark">
          {players.map((player) => (
            <Player
              highScore={highScore}
              key={player.id}
              onAdjustPlayerScore={handleAdjustPlayerScore}
              onRemovePlayer={handleRemovePlayer}
              player={player}
            />
          ))}
        </Box>

        <AddPlayer onAddPlayer={handleAddPlayer} />
      </CardContent>
    </Card>
  );
}
