import { useState } from "react";
import styles from "./menuStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import PropTypes from "prop-types";
import { Button, Menu, MenuItem } from "@mui/material";

const MenuButton = ({ title = "", menuItems = [], onMenuItemClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    onMenuItemClick(item);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        sx={styles.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <GetAppRoundedIcon sx={styles.downloadIcon} />
        <span>{title}</span>
        <ExpandMoreIcon sx={anchorEl ? styles.upIcon : styles.downIcon} />
      </Button>

      <Menu
        id="simple-menu"
        aria-label="export data menu"
        sx={styles["& .MuiMenu-paper"]}
        getcontentanchorel={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`menuitem-${title}-${index}`}
            onClick={() => handleMenuItemClick(menuItem)}
            sx={{
              fontFamily: "Mukta",
            }}
          >
            {menuItem}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  onMenuItemClick: PropTypes.func,
};
