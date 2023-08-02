import { Toolbar, AppBar, IconButton, Box } from "@mui/material";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import zIndex from "@mui/material/styles/zIndex";
import LightLogo from "../../assets/Logo.png";

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
          <img height={"40px"} src={LightLogo} alt="logo" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
};

export default Navbar;
