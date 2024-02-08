"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import LayoutDefaultParams from "@/lib/LayoutDefaultParams";

export default function MuiThemeProvider({ children }: LayoutDefaultParams) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}
