import { useState } from "react";
import styles from "./menuStyles";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import PublishRoundedIcon from "@mui/icons-material/PublishRounded";
import PropTypes from "prop-types";
import { Button, Menu, MenuItem, Tooltip } from "@mui/material";

const MenuButton = ({ title = "", menuItems = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    handleClose();
  };

  return (
    <>
      <Tooltip title={title}>
        <Button
          variant="outlined"
          color="secondary"
          sx={styles.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {title === "Export" ? (
            <GetAppRoundedIcon sx={styles.downloadIcon} />
          ) : (
            <PublishRoundedIcon sx={styles.uploadIcon} />
          )}
        </Button>
      </Tooltip>

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
    </>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
};
