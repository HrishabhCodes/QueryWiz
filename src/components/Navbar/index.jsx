import {
  Toolbar,
  AppBar,
  IconButton,
  Box,
  Button,
  Tooltip,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import BookIcon from "@mui/icons-material/Book";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import zIndex from "@mui/material/styles/zIndex";
import LightLogo from "../../assets/Logo.png";
import { useState } from "react";
import CheatSheet from "../CheatSheet";
import BotDialog from "../BotDialog";
import { Link } from "react-router-dom";

// Navbar styles
const styles = {
  appBar: {
    zIndex: zIndex.drawer + 1,
  },
  menuButton: {
    borderRadius: "10px",
    marginLeft: "10px",
    border: "1px solid grey",
    padding: "5px",
  },
  navTitle: {
    flexGrow: 1,
    marginLeft: "30px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
  },
};

const Navbar = ({ onMenuButtonClick }) => {
  const [showBot, setShowBot] = useState(false);
  const [showSheet, setShowSheet] = useState(false);

  const handleCloseSheet = () => {
    setShowSheet(false);
  };

  const handleCloseBot = () => {
    setShowBot(false);
  };

  const handleOpenBot = () => {
    setShowBot(true);
  };

  const handleOpenSheet = () => {
    setShowSheet(true);
  };

  return (
    <AppBar position="absolute" sx={{ ...styles.appBar }}>
      <Toolbar>
        <IconButton
          sx={styles.menuButton}
          disableRipple
          edge="start"
          aria-label="sidebar menu"
          onClick={onMenuButtonClick}
        >
          <MenuIcon color="textPrimary" />
        </IconButton>
        <Box sx={styles.navTitle}>
          <Link to="/">
            <img
              height={"40px"}
              src={LightLogo}
              alt="logo"
              style={{ marginTop: "5px" }}
            />
          </Link>
        </Box>
        <Tooltip title="AI Assistant">
          <Button
            color="secondary"
            size="small"
            name="bot"
            onClick={handleOpenBot}
          >
            <SmartToyIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Cheatsheet">
          <Button
            color="secondary"
            size="small"
            name="sheet"
            onClick={handleOpenSheet}
          >
            <BookIcon />
          </Button>
        </Tooltip>
        <CheatSheet open={showSheet} handleCloseSheet={handleCloseSheet} />
        <BotDialog open={showBot} handleCloseBot={handleCloseBot} />
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
};

export default Navbar;
