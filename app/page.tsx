import { Container } from "@mui/material";

import { Scoreboard } from "app/components/Scoreboard";

export default function Home() {
  return (
    <Container component="main" maxWidth="md">
      <Scoreboard />
    </Container>
  );
}
