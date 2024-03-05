import { Box, Button } from "@mui/material";

import { useAddPlayer } from "app/components/AddPlayer/useAddPlayer";
import { FormTextField } from "app/components/FormTextField";
import { REQUIRED_RULE } from "app/utilities";

type AddPlayerProps = { onAddPlayer: (newPlayerName: string) => void };

export const ADD_PLAYER_TEXT = "add player";

const color = { color: "primary.contrastText" };

export function AddPlayer({ onAddPlayer }: AddPlayerProps) {
  const { control, onSubmit: handleSubmit } = useAddPlayer(onAddPlayer);

  return (
    <Box
      alignItems="start"
      bgcolor="primary.main"
      color="primary.contrastText"
      component="form"
      display="flex"
      gap={2}
      justifyContent="space-between"
      onSubmit={handleSubmit}
      p={2}
    >
      <FormTextField
        control={control}
        InputLabelProps={{
          sx: {
            "&.Mui-focused": color,
            color: "primary.contrastText",
          },
        }}
        InputProps={{
          sx: {
            "&.MuiOutlinedInput-root.Mui-focused": {
              "& fieldset": {
                borderColor: "primary.contrastText",
              },
            },
            color: "primary.contrastText",
          },
        }}
        label="Name"
        name="newPlayerName"
        rules={REQUIRED_RULE}
      ></FormTextField>

      <Button color="success" size="small" type="submit" variant="contained">
        {ADD_PLAYER_TEXT}
      </Button>
    </Box>
  );
}
