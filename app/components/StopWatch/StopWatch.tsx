import { Box, Button, Typography } from "@mui/material";

import { useStopWatch } from "app/components/StopWatch/useStopWatch";

export const TITLE = "Stop Watch";
export const RESET_BUTTON_LABEL = "reset";
export const START_BUTTON_LABEL = "start";
export const STOP_BUTTON_LABEL = "stop";

export function StopWatch() {
  const {
    elapsedTime,
    handleClickReset,
    handleClickStart,
    handleClickStop,
    isRunning,
  } = useStopWatch();

  return (
    <Box textAlign="center">
      <Typography>{TITLE}</Typography>

      <Typography my={2}>{elapsedTime}</Typography>

      <Box display="flex" gap={2}>
        <Button
          color="error"
          onClick={handleClickReset}
          size="small"
          variant="contained"
        >
          {RESET_BUTTON_LABEL}
        </Button>

        {!isRunning ? (
          <Button
            color="success"
            onClick={handleClickStart}
            size="small"
            variant="contained"
          >
            {START_BUTTON_LABEL}
          </Button>
        ) : (
          <Button
            color="warning"
            onClick={handleClickStop}
            size="small"
            variant="contained"
          >
            {STOP_BUTTON_LABEL}
          </Button>
        )}
      </Box>
    </Box>
  );
}
