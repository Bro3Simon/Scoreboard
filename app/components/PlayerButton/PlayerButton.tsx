import { ComponentProps } from "react";

import { Button } from "@mui/material";

type PlayerButtonProps = PlayerButtonOwnProps &
  Required<Pick<ComponentProps<typeof Button>, "onClick">>;
type PlayerButtonOwnProps = {
  text: "-" | "+" | "X";
};

const size = 32;

export function PlayerButton({
  onClick: handleClick,
  text,
}: PlayerButtonProps) {
  return (
    <Button
      color={text === "-" || text === "X" ? "error" : "success"}
      onClick={handleClick}
      size="small"
      sx={{ height: size, minWidth: size, width: size }}
      variant="contained"
    >
      {text}
    </Button>
  );
}
