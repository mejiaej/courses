import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";

const MenuAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SchoolIcon />
          </IconButton>

          <Button color="inherit" component={Link} to={"/students"}>
            Students
          </Button>
          <Button color="inherit" component={Link} to={"/courses"}>
            Courses
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
