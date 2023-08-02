import CloseIcon from "@mui/icons-material/Close";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";

import PropTypes from "prop-types";
import { Box, Tab } from "@mui/material";

// Styles for custom tab
const styles = {
  tabItemWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tabItem: {
    minWidth: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    "@media (min-width:960px)": {
      minWidth: 0,
    },
    "&+&": {
      borderLeft: `1px solid grey`,
    },
  },
  "& .MuiSvgIcon-root": {
    marginBottom: "0 !important",
    marginRight: "8px",
  },
  tabDeleteIcon: {
    marginLeft: "8px",
  },
};

/** Custom Tab Component with Delete Button */
export const CustomTab = ({ tab, onDelete, ...props }) => {
  return (
    <Tab
      sx={{
        "& .MuiTab-root": styles.tabItem,
        "& .MuiTab-iconWrapper": styles.tabItemWrapper,
        fontFamily: "Mukta",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      icon={
        tab.id === "home_tab" ? (
          <HomeRoundedIcon sx={styles["& .MuiSvgIcon-root"]} fontSize="small" />
        ) : (
          <NoteOutlinedIcon
            sx={styles["& .MuiSvgIcon-root"]}
            fontSize="small"
          />
        )
      }
      label={<TabLabel tab={tab} onDelete={onDelete} />}
      value={tab.value}
      {...props}
    />
  );
};

// Tab Label
const TabLabel = ({ tab, onDelete }) => {
  return tab.canDelete ? (
    <Box display="flex" alignItems="center">
      {tab.name}
      <CloseIcon
        sx={styles.tabDeleteIcon}
        fontSize="small"
        onClick={(e) => {
          onDelete(e, tab.id);
        }}
      />
    </Box>
  ) : (
    tab.name
  );
};

CustomTab.propTypes = {
  tab: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

TabLabel.propTypes = {
  tab: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

export default CustomTab;
