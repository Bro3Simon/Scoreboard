import { ThemeRegistry } from "app/ThemeRegistry";
import { Children } from "app/types/commonProps";

import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "A versatile scoreboard equipped with a stopwatch feature, designed to assist in keeping score for various games. This project demonstrates proficiency in React and frontend concepts, showcasing practical skills and knowledge.",
  title: "Scoreboard",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
