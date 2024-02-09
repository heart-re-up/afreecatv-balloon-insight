import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuOutlined as MenuIcon } from "@mui/icons-material";

export default function MyAppBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          MUI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
